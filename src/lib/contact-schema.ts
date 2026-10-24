import { ContactFormData } from '@/types/site';

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot check (must be empty)
  if (data.honeypot && data.honeypot.trim() !== '') {
    errors.honeypot = 'Invalid submission.';
  }

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name (minimum 2 characters).';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Name must be 100 characters or fewer.';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  // Optional phone validation
  if (data.phone && data.phone.trim().length > 0) {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;
    if (!phoneRegex.test(data.phone.trim())) {
      errors.phone = 'Please provide a valid phone number or leave blank.';
    }
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide a detailed message (minimum 10 characters).';
  } else if (data.message.trim().length > 2000) {
    errors.message = 'Message must be 2000 characters or fewer.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
