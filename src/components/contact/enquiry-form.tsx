'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { siteContent } from '@/content/site-content';
import { Button } from '@/components/ui/button';
import { ContactFormData, ContactApiResponse } from '@/types/site';

export function EnquiryForm() {
  const formContent = siteContent.contact.form;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrors({});
    setServerMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setServerMessage(data.message || formContent.successMessage);
        setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
      } else {
        setSubmitStatus('error');
        setServerMessage(data.message || formContent.errorMessage);
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch {
      setSubmitStatus('error');
      setServerMessage(formContent.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#17354B]/10 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#17354B]">
          {formContent.title}
        </h2>
        <p className="text-sm text-[#5A6E7D] mt-1.5">
          {formContent.intro}
        </p>
      </div>

      {submitStatus === 'success' ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
          <div className="flex items-center gap-2 font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Message Delivered</span>
          </div>
          <p className="text-sm text-emerald-800 leading-relaxed">
            {serverMessage}
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setSubmitStatus('idle')}
            className="mt-2"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot field (hidden from view) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Do not fill this</label>
            <input
              id="hp_field"
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {submitStatus === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <span>{serverMessage}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17354B] mb-1.5"
            >
              {formContent.fields.name.label} <span className="text-[#D96B60]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={formContent.fields.name.placeholder}
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#17354B] bg-[#F6F4EE]/30 focus:bg-white transition-colors ${
                errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[#17354B]/15 focus:border-[#367D78]'
              }`}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-600 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17354B] mb-1.5"
            >
              {formContent.fields.email.label} <span className="text-[#D96B60]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={formContent.fields.email.placeholder}
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#17354B] bg-[#F6F4EE]/30 focus:bg-white transition-colors ${
                errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[#17354B]/15 focus:border-[#367D78]'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-600 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field (Optional) */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17354B] mb-1.5"
            >
              {formContent.fields.phone.label}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder={formContent.fields.phone.placeholder}
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#17354B] bg-[#F6F4EE]/30 focus:bg-white transition-colors ${
                errors.phone
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[#17354B]/15 focus:border-[#367D78]'
              }`}
            />
            {errors.phone && (
              <p id="phone-error" className="text-xs text-red-600 mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17354B] mb-1.5"
            >
              {formContent.fields.message.label} <span className="text-[#D96B60]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder={formContent.fields.message.placeholder}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#17354B] bg-[#F6F4EE]/30 focus:bg-white transition-colors resize-y ${
                errors.message
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[#17354B]/15 focus:border-[#367D78]'
              }`}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-600 mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  <span>{formContent.submittingButton}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  <span>{formContent.submitButton}</span>
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
