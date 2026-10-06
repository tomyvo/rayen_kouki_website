import { useEffect, useId, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { site } from '../data/site';
import { submitLesson, webhookUrl } from '../config/integrations';
import type { LessonPayload, LessonSubmissionResult } from '../config/integrations';
import { Arrow, Reveal, SectionHeading } from './UI';
import '../styles/lesson.css';

type FieldName = keyof LessonPayload;
type FieldErrors = Partial<Record<FieldName, string>>;
const emptyValues: LessonPayload = { name: '', email: '', phone: '', area: '', timeframe: '', message: '' };
const fieldOrder: FieldName[] = ['name', 'email', 'phone', 'area', 'timeframe', 'message'];
const supportedArea = (value: string | undefined) => site.lesson.areas.some(area => area.value === value);

function validate(values: LessonPayload): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = site.lesson.errors.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = site.lesson.errors.email;
  const phone = values.phone.trim();
  if (phone && (!/^[+\d()\s./-]+$/.test(phone) || phone.replace(/\D/g, '').length < 6 || phone.replace(/\D/g, '').length > 20)) errors.phone = site.lesson.errors.phone;
  if (!supportedArea(values.area)) errors.area = site.lesson.errors.area;
  if (!values.timeframe.trim()) errors.timeframe = site.lesson.errors.timeframe;
  if (!values.message.trim()) errors.message = site.lesson.errors.message;
  return errors;
}

export function PrivateLesson({ selectedArea, selectionVersion = 0 }: { selectedArea?: string; selectionVersion?: number }) {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);
  const [values, setValues] = useState<LessonPayload>(() => ({ ...emptyValues, area: supportedArea(selectedArea) ? selectedArea! : '' }));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showSummary, setShowSummary] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<LessonSubmissionResult | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      controllerRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (!supportedArea(selectedArea)) return;
    setValues(current => ({ ...current, area: selectedArea! }));
    setErrors(current => ({ ...current, area: undefined }));
    setResult(null);
  }, [selectedArea, selectionVersion]);

  useEffect(() => {
    if (result) statusRef.current?.focus();
  }, [result]);

  function updateField(name: FieldName, value: string) {
    const next = { ...values, [name]: value };
    setValues(next);
    setSubmissionError('');
    if (errors[name]) setErrors(current => ({ ...current, [name]: validate(next)[name] }));
  }

  function blurField(name: FieldName) {
    setErrors(current => ({ ...current, [name]: validate(values)[name] }));
  }

  function focusField(name: FieldName) {
    requestAnimationFrame(() => {
      const field = formRef.current?.elements.namedItem(name);
      if (field instanceof HTMLElement) field.focus();
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmissionError('');
    const firstInvalid = fieldOrder.find(name => nextErrors[name]);
    if (firstInvalid) {
      setShowSummary(true);
      focusField(firstInvalid);
      return;
    }
    setShowSummary(false);
    setIsSubmitting(true);
    const controller = new AbortController();
    controllerRef.current = controller;
    const timeoutId = window.setTimeout(() => controller.abort(), 20_000);
    const payload = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()])) as LessonPayload;
    try {
      const response = await submitLesson(payload, controller.signal);
      if (mountedRef.current) setResult(response);
    } catch (error) {
      if (mountedRef.current) setSubmissionError(error instanceof Error ? error.message : site.lesson.errors.network);
    } finally {
      window.clearTimeout(timeoutId);
      if (controllerRef.current === controller) controllerRef.current = null;
      if (mountedRef.current) setIsSubmitting(false);
    }
  }

  function resetForm() {
    setValues({ ...emptyValues, area: supportedArea(selectedArea) ? selectedArea! : '' });
    setErrors({});
    setShowSummary(false);
    setSubmissionError('');
    setResult(null);
    focusField('name');
  }

  function field(name: FieldName) {
    const content = site.lesson.fields[name];
    const id = `${formId}-${name}`;
    const errorId = `${id}-error`;
    const shared = {
      id, name, value: values[name], required: content.required,
      'aria-invalid': Boolean(errors[name]),
      'aria-describedby': errors[name] ? errorId : undefined,
      onBlur: () => blurField(name),
    };
    return <div className={`lesson-field ${name === 'timeframe' || name === 'message' ? 'lesson-field-wide' : ''}`} key={name}>
      <label htmlFor={id}><span>{content.label}</span><span className="lesson-field-meta" aria-hidden="true">{content.required ? site.lesson.requiredLabel : site.lesson.optionalLabel}</span></label>
      {name === 'area' ? <select {...shared} autoComplete="off" onChange={event => updateField(name, event.target.value)}>
        <option value="" disabled>{content.placeholder}</option>{site.lesson.areas.map(area => <option value={area.value} key={area.value}>{area.label}</option>)}
      </select> : name === 'message' ? <textarea {...shared} placeholder={content.placeholder} rows={4} maxLength={2000} autoComplete="off" onChange={event => updateField(name, event.target.value)} /> : <input {...shared} type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'} placeholder={content.placeholder} maxLength={name === 'email' ? 254 : name === 'phone' ? 40 : name === 'timeframe' ? 200 : 100} autoComplete={name === 'name' ? 'name' : name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'off'} onChange={event => updateField(name, event.target.value)} />}
      {errors[name] && <p className="lesson-field-error" id={errorId}>{errors[name]}</p>}
    </div>;
  }

  return <section className="section container lesson" id="private-lesson" aria-label={site.lesson.title.replace('\n', ' ')}>
    <div className="lesson-grid">
      <div className="lesson-copy">
        <SectionHeading eyebrow={site.lesson.eyebrow} title={site.lesson.title} description={site.lesson.description} />
        <Reveal className="lesson-image"><img src={site.lesson.image.src} alt={site.lesson.image.alt} style={{ objectPosition: site.lesson.image.position }} loading="lazy" width="572" height="902" /><span aria-hidden="true" /></Reveal>
      </div>
      <Reveal className="lesson-panel" delay={.1}>
        {result ? <div ref={statusRef} className="lesson-status" role="status" aria-live="polite" tabIndex={-1}>
          <span className="lesson-status-icon" aria-hidden="true"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m5 12 4 4L19 6" /></svg></span>
          <h3>{result.mode === 'demo' ? site.lesson.demoTitle : site.lesson.successTitle}</h3>
          <p>{result.message}</p>
          <a className="btn btn-primary" href={site.lesson.instagramCta.href} target="_blank" rel="noopener noreferrer">{site.lesson.instagramCta.label}<Arrow /></a>
          <button className="btn btn-outline" type="button" onClick={resetForm}>{site.lesson.resetLabel}<Arrow /></button>
        </div> : <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label={site.lesson.formTitle}>
          <h3 className="lesson-form-title">{site.lesson.formTitle}</h3>
          <p className="lesson-form-description">{webhookUrl.trim() ? site.lesson.description : site.lesson.formDescription}</p>
          {showSummary && fieldOrder.some(name => errors[name]) && <p className="lesson-form-error" role="alert">{site.lesson.errors.validationSummary}</p>}
          {submissionError && <p className="lesson-form-error" role="alert">{submissionError}</p>}
          <fieldset disabled={isSubmitting} className="lesson-fields">
            {fieldOrder.map(field)}
            <button className="btn btn-primary lesson-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? site.lesson.submittingLabel : site.lesson.submitLabel}<Arrow /></button>
          </fieldset>
          <p className="lesson-privacy">{site.lesson.privacyNote}</p>
        </form>}
      </Reveal>
    </div>
  </section>;
}
