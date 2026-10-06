import { site } from '../data/site';
import type { PaymentKey } from '../data/site';

/** Public hosted-checkout URLs only. Never put Stripe secret keys in frontend code. */
export const paymentLinks: Record<PaymentKey, string> = {
  footwork: '',
  shooting: '',
  nutrition: '',
  privateLesson: '',
};

/** Public HTTPS endpoint. Leave empty to keep the request form in demo mode. */
export const webhookUrl: string = '';

export type LessonPayload = {
  name: string;
  email: string;
  phone: string;
  area: string;
  timeframe: string;
  message: string;
};

export type LessonSubmissionResult = {
  mode: 'demo' | 'sent';
  message: string;
};

/** Resolves locally in demo mode; sends only when an HTTPS endpoint is configured. */
export async function submitLesson(
  payload: LessonPayload,
  signal?: AbortSignal,
): Promise<LessonSubmissionResult> {
  if (!webhookUrl.trim()) {
    return { mode: 'demo', message: site.lesson.demoMessage };
  }

  let endpoint: URL;
  try {
    endpoint = new URL(webhookUrl);
  } catch {
    throw new Error(site.lesson.errors.invalidWebhook);
  }
  if (endpoint.protocol !== 'https:' || endpoint.username || endpoint.password) {
    throw new Error(site.lesson.errors.invalidWebhook);
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'omit',
      redirect: 'error',
      signal,
    });
    if (!response.ok) throw new Error(site.lesson.errors.network);
    return { mode: 'sent', message: site.lesson.successMessage };
  } catch {
    throw new Error(site.lesson.errors.network);
  }
}
