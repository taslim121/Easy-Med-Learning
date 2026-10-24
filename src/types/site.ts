export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'Instagram' | 'YouTube' | 'WhatsApp';
  url: string;
  handle?: string;
  ariaLabel: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  description?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface InstructorStat {
  value: string;
  label: string;
  detail: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isPending?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}
