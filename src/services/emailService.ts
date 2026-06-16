import { EMAIL_CONFIG } from '../config/emailConfig';
import { inquiryStore } from '../stores/inquiryStore';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  page?: string;
  service?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

/**
 * Sends a contact form submission via Web3Forms API.
 * Delivers a real-time email to the admin inbox.
 * Also stores the inquiry in the local admin store.
 */
export async function sendContactEmail(data: ContactFormData): Promise<EmailResponse> {
  const { accessKey, endpoint, fromName, subjectPrefix } = EMAIL_CONFIG;

  // Build the payload
  const payload: Record<string, string> = {
    access_key: accessKey,
    from_name: fromName,
    subject: `${subjectPrefix} ${data.subject}`,
    name: data.name,
    email: data.email,
    message: data.message,
    botcheck: '',
  };

  // Optional fields
  if (data.phone) payload.phone = data.phone;
  if (data.page) payload.page = data.page;
  if (data.service) payload.service = data.service;

  // Add reply-to so admin can reply directly
  payload.replyto = data.email;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      // Store in local admin panel
      inquiryStore.add({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        page: data.page,
        service: data.service,
      });

      return {
        success: true,
        message:
          'Your message has been sent successfully! We will get back to you within 24 hours.',
      };
    } else {
      return {
        success: false,
        message:
          result.message || 'Something went wrong. Please try again later.',
      };
    }
  } catch {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
