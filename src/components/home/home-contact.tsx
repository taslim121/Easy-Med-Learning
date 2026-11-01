'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { homeContent } from '@/content/home-content';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/motion/reveal';

export function HomeContact() {
  const { contact } = homeContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.message.trim()) errs.message = 'Please provide your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulated reliable direct dispatch
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-16 sm:py-24 bg-[#FAF9F6] text-[#17354B] relative overflow-hidden"
      aria-label="Contact Us"
    >
      <Container size="narrow">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <Reveal direction="down">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#367D78]/10 text-[#367D78] border border-[#367D78]/20">
              <Mail className="w-3.5 h-3.5" />
              Direct Support &amp; Enquiries
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#17354B] font-editorial leading-tight">
              {contact.heading}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed">
              {contact.description}
            </p>
          </Reveal>
        </div>

        {/* Centered Form Card */}
        <Reveal direction="up" delay={0.25}>
          <div className="max-w-xl mx-auto rounded-3xl bg-white border border-[#17354B]/10 p-6 sm:p-10 shadow-[0_20px_50px_-12px_rgba(23,53,75,0.08)]">
            
            {submitStatus === 'success' ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#367D78]/10 text-[#367D78] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#17354B]">Message Received</h3>
                <p className="text-sm text-[#5A6E7D] leading-relaxed max-w-md mx-auto">
                  {contact.form.successMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="px-5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#17354B]/10 text-xs font-mono font-semibold text-[#17354B] hover:bg-[#17354B]/5 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="home-name" className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#17354B]">
                    {contact.form.namePlaceholder} *
                  </label>
                  <input
                    id="home-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#17354B] placeholder:text-[#5A6E7D]/50 focus:outline-none focus:ring-2 focus:ring-[#367D78]/30 transition-all ${
                      errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-[#17354B]/15'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 font-mono">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="home-email" className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#17354B]">
                    {contact.form.emailPlaceholder} *
                  </label>
                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#17354B] placeholder:text-[#5A6E7D]/50 focus:outline-none focus:ring-2 focus:ring-[#367D78]/30 transition-all ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-[#17354B]/15'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 font-mono">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="home-phone" className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#17354B]">
                    {contact.form.phonePlaceholder}
                  </label>
                  <input
                    id="home-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210 (Optional)"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#17354B]/15 text-sm text-[#17354B] placeholder:text-[#5A6E7D]/50 focus:outline-none focus:ring-2 focus:ring-[#367D78]/30 transition-all"
                  />
                </div>

                {/* Your Message */}
                <div className="space-y-1.5">
                  <label htmlFor="home-message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#17354B]">
                    {contact.form.messagePlaceholder} *
                  </label>
                  <textarea
                    id="home-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help your medical learning journey?"
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#17354B] placeholder:text-[#5A6E7D]/50 focus:outline-none focus:ring-2 focus:ring-[#367D78]/30 transition-all resize-none ${
                      errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-[#17354B]/15'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-500 font-mono">{errors.message}</p>}
                </div>

                {submitStatus === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Something went wrong. Please check your connection and try again.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#17354B] hover:bg-[#244C68] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{contact.form.submittingLabel}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{contact.form.submitLabel}</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </Reveal>

      </Container>
    </section>
  );
}
