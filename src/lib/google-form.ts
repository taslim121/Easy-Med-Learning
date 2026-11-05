/**
 * Google Forms Free Unlimited Headless Submission Utility
 * Sends form submissions directly to Google Forms via client-side fetch (mode: 'no-cors').
 * Submissions sync instantly to your private Google Sheet without server costs or limits.
 */

export interface GoogleFormSubmissionData {
  name: string;
  email: string;
  phone?: string;
  degree: string;
  message: string;
}

// Fallback configuration derived from the verified pre-filled Google Form URL
const DEFAULT_FORM_CONFIG = {
  actionUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSctI5kbr78RuJPJItElVEinW51aEa31JmRLqxxsU025VR-n7A/formResponse',
  entries: {
    name: 'entry.701707275',
    email: 'entry.800038153',
    phone: 'entry.84285558',
    degree: 'entry.1822649582',
    message: 'entry.12950568',
  },
};

/**
 * Parses a Google Form pre-filled link into an action URL and entry IDs.
 */
function getFormConfig() {
  const envUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
  if (!envUrl) return DEFAULT_FORM_CONFIG;

  try {
    const url = new URL(envUrl);
    // Replace /viewform with /formResponse
    const actionUrl = url.origin + url.pathname.replace(/\/viewform$/, '/formResponse');

    let name = DEFAULT_FORM_CONFIG.entries.name;
    let email = DEFAULT_FORM_CONFIG.entries.email;
    let phone = DEFAULT_FORM_CONFIG.entries.phone;
    let degree = DEFAULT_FORM_CONFIG.entries.degree;
    let message = DEFAULT_FORM_CONFIG.entries.message;

    url.searchParams.forEach((val, key) => {
      const lower = val.toLowerCase();
      if (lower.includes('name')) name = key;
      else if (lower.includes('email')) email = key;
      else if (lower.includes('phone')) phone = key;
      else if (lower.includes('degree')) degree = key;
      else if (lower.includes('message')) message = key;
    });

    return {
      actionUrl,
      entries: { name, email, phone, degree, message },
    };
  } catch {
    return DEFAULT_FORM_CONFIG;
  }
}

/**
 * Submits form data to Google Forms from the client browser.
 */
export async function submitToGoogleForm(
  data: GoogleFormSubmissionData
): Promise<{ success: boolean; error?: string }> {
  try {
    const config = getFormConfig();

    const formBody = new URLSearchParams();
    formBody.append(config.entries.name, data.name.trim());
    formBody.append(config.entries.email, data.email.trim());
    if (data.phone && data.phone.trim().length > 0) {
      formBody.append(config.entries.phone, data.phone.trim());
    }
    formBody.append(config.entries.degree, data.degree.trim());
    formBody.append(config.entries.message, data.message.trim());

    // Google Forms requires mode: 'no-cors' from arbitrary origins
    await fetch(config.actionUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });

    return { success: true };
  } catch (err) {
    console.error('Failed to submit to Google Form:', err);
    return {
      success: false,
      error: 'Unable to deliver message at this moment. Please try again.',
    };
  }
}
