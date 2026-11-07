/**
 * Google Forms Free Unlimited Headless Submission Utility
 * Sends form submissions directly to Google Forms via client-side fetch (mode: 'no-cors').
 * Submissions sync instantly to your private Google Sheet without server costs or limits.
 * 100% pure static site generation (SSG) compatible for Cloudflare Pages.
 */

// ---------------------------------------------------------------------------
// 1. General Contact & Course Enquiries Form
// ---------------------------------------------------------------------------

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
 * Parses a Google Form pre-filled link into an action URL and entry IDs for Contact/Home.
 */
function getFormConfig() {
  const envUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
  if (!envUrl) return DEFAULT_FORM_CONFIG;

  try {
    const url = new URL(envUrl);
    // Replace /viewform with /formResponse
    const actionUrl = url.origin + url.pathname.replace(/\/viewform.*$/, '/formResponse');

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
 * Submits general contact enquiry data to Google Forms from the client browser.
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

// ---------------------------------------------------------------------------
// 2. Community Peer Circle Membership Application Form (Completely Separate)
// ---------------------------------------------------------------------------

export interface CommunityFormSubmissionData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  institution: string;
  specialty?: string;
  goals?: string;
  receiveUpdates?: boolean;
}

// Separate fallback configuration for Community Membership Application
// Derived from the verified pre-filled Community Google Form
const DEFAULT_COMMUNITY_CONFIG = {
  actionUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSffnHvSfvy3q42vSyZ3YksqI-GauoGMMXXujVy8vi_ClPuqJQ/formResponse',
  entries: {
    fullName: 'entry.750058720',
    email: 'entry.695568608',
    phone: 'entry.1364701544',
    role: 'entry.1595338858',
    institution: 'entry.229642944',
    specialty: 'entry.2132460213',
    goals: 'entry.2083951765',
  },
  fallbackMessageEntry: 'entry.2083951765',
};

/**
 * Parses a Community Google Form pre-filled link into an action URL and entry IDs.
 * Completely separate from the Contact Form.
 * Automatically scans query parameters to map entries for Full Name, Email, Phone, Role,
 * Institution, Specialty, and Goals.
 */
export function getCommunityFormConfig() {
  const envUrl = process.env.NEXT_PUBLIC_COMMUNITY_GOOGLE_FORM_URL;
  if (!envUrl) return DEFAULT_COMMUNITY_CONFIG;

  try {
    const url = new URL(envUrl);
    // Convert viewform endpoint to formResponse endpoint
    const actionUrl = url.origin + url.pathname.replace(/\/viewform.*$/, '/formResponse');

    let fullName = '';
    let email = '';
    let phone = '';
    let role = '';
    let institution = '';
    let specialty = '';
    let goals = '';
    let fallbackMessageEntry = '';

    url.searchParams.forEach((val, key) => {
      const lower = val.toLowerCase();
      if (lower.includes('name')) fullName = key;
      else if (lower.includes('email')) email = key;
      else if (lower.includes('phone') || lower.includes('mobile') || lower.includes('whatsapp')) phone = key;
      else if (lower.includes('role') || lower.includes('designation') || lower.includes('profession')) role = key;
      else if (lower.includes('institution') || lower.includes('college') || lower.includes('hospital')) institution = key;
      else if (lower.includes('specialty') || lower.includes('speciality') || lower.includes('dept') || lower.includes('department')) specialty = key;
      else if (lower.includes('goal') || lower.includes('gain') || lower.includes('interest') || lower.includes('reason') || lower.includes('objective')) goals = key;
      else if (lower.includes('message') || lower.includes('note') || lower.includes('comment')) fallbackMessageEntry = key;
    });

    // Fallback: If goals is not explicitly named, use fallback message entry if available
    if (!goals && fallbackMessageEntry) {
      goals = fallbackMessageEntry;
    }

    return {
      actionUrl,
      entries: {
        fullName,
        email,
        phone,
        role,
        institution,
        specialty,
        goals,
      },
      fallbackMessageEntry,
    };
  } catch {
    return DEFAULT_COMMUNITY_CONFIG;
  }
}

/**
 * Submits community membership application data directly to Google Forms from the browser.
 * Completely separate from the Contact / Enquiry form.
 * Free, unlimited, and delivers instantly into your dedicated Community Google Sheet.
 */
export async function submitCommunityToGoogleForm(
  data: CommunityFormSubmissionData
): Promise<{ success: boolean; error?: string }> {
  try {
    const config = getCommunityFormConfig();

    if (!config.actionUrl) {
      console.warn(
        'Community Google Form URL is not configured yet. Set NEXT_PUBLIC_COMMUNITY_GOOGLE_FORM_URL in .env.local'
      );
      // Graceful local test success until the founder shares the link
      return { success: true };
    }

    const formBody = new URLSearchParams();

    if (config.entries.fullName) {
      formBody.append(config.entries.fullName, data.fullName.trim());
    }
    if (config.entries.email) {
      formBody.append(config.entries.email, data.email.trim());
    }
    if (config.entries.phone && data.phone && data.phone.trim().length > 0) {
      formBody.append(config.entries.phone, data.phone.trim());
    }
    if (config.entries.role) {
      formBody.append(config.entries.role, data.role.trim());
    }
    if (config.entries.institution && data.institution) {
      formBody.append(config.entries.institution, data.institution.trim());
    }
    if (config.entries.specialty && data.specialty) {
      formBody.append(config.entries.specialty, data.specialty.trim());
    }

    // Build the goals/notes payload:
    // If the Google Form does not have separate fields for Institution or Specialty,
    // bundle them cleanly into the Goals / Message entry so no information is lost!
    let goalsText = data.goals?.trim() || '';
    if (!config.entries.institution && data.institution) {
      goalsText = `[Institution: ${data.institution.trim()}] ${goalsText}`.trim();
    }
    if (!config.entries.specialty && data.specialty) {
      goalsText = `[Specialty: ${data.specialty.trim()}] ${goalsText}`.trim();
    }

    if (config.entries.goals && goalsText) {
      formBody.append(config.entries.goals, goalsText);
    } else if (config.fallbackMessageEntry && goalsText) {
      formBody.append(config.fallbackMessageEntry, goalsText);
    }

    // Google Forms submission requires mode: 'no-cors' from external domains
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
    console.error('Failed to submit community application to Google Form:', err);
    return {
      success: false,
      error: 'Unable to submit your application at this moment. Please try again.',
    };
  }
}
