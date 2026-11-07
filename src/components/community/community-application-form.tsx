'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Users,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { DotPattern } from '@/components/ui/dot-pattern';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { communityPageContent } from '@/content/community-content';
import { submitCommunityToGoogleForm } from '@/lib/google-form';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  institution: string;
  specialty: string;
  goals: string;
  agreedGuidelines: boolean;
  agreedPrivacy: boolean;
  receiveUpdates: boolean;
  honeypot: string;
}

export function CommunityApplicationForm() {
  const { form } = communityPageContent;
  const { title, subtitle, fields, checkboxes, submitButton, successMessage } = form;

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    institution: '',
    specialty: '',
    goals: '',
    agreedGuidelines: false,
    agreedPrivacy: false,
    receiveUpdates: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (submitError) setSubmitError(null);
  };

  const handleCheckboxChange = (name: keyof FormState, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as string];
        return next;
      });
    }
    if (submitError) setSubmitError(null);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }
    if (!formData.institution.trim()) {
      newErrors.institution = 'College or hospital name is required';
    }
    if (!formData.agreedGuidelines) {
      newErrors.agreedGuidelines = 'You must agree to the Community Guidelines';
    }
    if (!formData.agreedPrivacy) {
      newErrors.agreedPrivacy = 'Verification consent is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam protection
    if (formData.honeypot) return;

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await submitCommunityToGoogleForm({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        institution: formData.institution,
        specialty: formData.specialty,
        goals: formData.goals,
        receiveUpdates: formData.receiveUpdates,
      });

      if (res.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(res.error || 'Failed to submit application. Please try again.');
      }
    } catch {
      setSubmitError('Unable to submit your application at this moment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply-form" className="py-16 sm:py-24 bg-white border-b border-[#17354B]/10 scroll-mt-20 relative overflow-hidden">
      {/* Background Dot Pattern Accent */}
      <DotPattern
        width={28}
        height={28}
        cx={2}
        cy={2}
        cr={1}
        className="text-[#367D78]/20 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white_25%,transparent_75%)]"
      />

      <Container size="wide" className="relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#367D78]/10 text-[#367D78] text-xs font-mono font-semibold uppercase tracking-wider border border-[#367D78]/20">
            <Users className="size-3.5" />
            <span>Membership Application</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17354B] tracking-tight">
            {title}
          </h2>
          
          <p className="text-base sm:text-lg text-[#5A6E7D] leading-relaxed max-w-2xl mx-auto font-normal">
            {subtitle}
          </p>
        </div>

        {/* Application Form Box */}
        <div className="max-w-2xl mx-auto">
          <div className="p-7 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#17354B]/10 shadow-[0_25px_60px_-15px_rgba(23,53,75,0.08)] backdrop-blur-sm">
            
            {isSuccess ? (
              <div className="text-center py-10 space-y-4">
                <div className="size-16 rounded-full bg-[#2DD4BF]/20 text-[#367D78] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-10 text-[#367D78]" />
                </div>
                <h3 className="text-2xl font-bold text-[#17354B]">
                  {successMessage.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5A6E7D] leading-relaxed max-w-md mx-auto">
                  {successMessage.description}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      role: '',
                      institution: '',
                      specialty: '',
                      goals: '',
                      agreedGuidelines: false,
                      agreedPrivacy: false,
                      receiveUpdates: false,
                      honeypot: '',
                    });
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-[#17354B] text-white text-xs font-mono font-semibold hover:bg-[#20445E] transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Honeypot anti-spam field */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Field: Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-xs font-mono uppercase font-bold text-[#17354B]">
                    {fields.fullName.label} <span className="text-[#D96B60]">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={fields.fullName.placeholder}
                    className={`h-11 rounded-xl bg-white border text-sm text-[#17354B] ${
                      errors.fullName ? 'border-[#D96B60] ring-1 ring-[#D96B60]' : 'border-[#17354B]/15'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#D96B60] font-medium flex items-center gap-1">
                      <AlertCircle className="size-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Two Columns: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-mono uppercase font-bold text-[#17354B]">
                      {fields.email.label} <span className="text-[#D96B60]">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={fields.email.placeholder}
                      className={`h-11 rounded-xl bg-white border text-sm text-[#17354B] ${
                        errors.email ? 'border-[#D96B60] ring-1 ring-[#D96B60]' : 'border-[#17354B]/15'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#D96B60] font-medium flex items-center gap-1">
                        <AlertCircle className="size-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-mono uppercase font-bold text-[#17354B]">
                      {fields.phone.label} <span className="text-[#D96B60]">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={fields.phone.placeholder}
                      className={`h-11 rounded-xl bg-white border text-sm text-[#17354B] ${
                        errors.phone ? 'border-[#D96B60] ring-1 ring-[#D96B60]' : 'border-[#17354B]/15'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#D96B60] font-medium flex items-center gap-1">
                        <AlertCircle className="size-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Field: Role Selector */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-xs font-mono uppercase font-bold text-[#17354B]">
                    {fields.role.label} <span className="text-[#D96B60]">*</span>
                  </Label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full h-11 px-3.5 rounded-xl bg-white border text-sm text-[#17354B] focus:outline-none focus:ring-2 focus:ring-[#367D78]/50 transition-all ${
                      errors.role ? 'border-[#D96B60] ring-1 ring-[#D96B60]' : 'border-[#17354B]/15'
                    }`}
                  >
                    <option value="">{fields.role.placeholder}</option>
                    {fields.role.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="text-xs text-[#D96B60] font-medium flex items-center gap-1">
                      <AlertCircle className="size-3.5" />
                      {errors.role}
                    </p>
                  )}
                </div>

                {/* Field: College or Hospital */}
                <div className="space-y-2">
                  <Label htmlFor="institution" className="text-xs font-mono uppercase font-bold text-[#17354B]">
                    {fields.institution.label} <span className="text-[#D96B60]">*</span>
                  </Label>
                  <Input
                    id="institution"
                    name="institution"
                    type="text"
                    value={formData.institution}
                    onChange={handleInputChange}
                    placeholder={fields.institution.placeholder}
                    className={`h-11 rounded-xl bg-white border text-sm text-[#17354B] ${
                      errors.institution ? 'border-[#D96B60] ring-1 ring-[#D96B60]' : 'border-[#17354B]/15'
                    }`}
                  />
                  {errors.institution && (
                    <p className="text-xs text-[#D96B60] font-medium flex items-center gap-1">
                      <AlertCircle className="size-3.5" />
                      {errors.institution}
                    </p>
                  )}
                </div>

                {/* Field: Specialty or area of interest (optional) */}
                <div className="space-y-2">
                  <Label htmlFor="specialty" className="text-xs font-mono uppercase font-bold text-[#17354B]">
                    {fields.specialty.label}
                  </Label>
                  <Input
                    id="specialty"
                    name="specialty"
                    type="text"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    placeholder={fields.specialty.placeholder}
                    className="h-11 rounded-xl bg-white border border-[#17354B]/15 text-sm text-[#17354B]"
                  />
                </div>

                {/* Field: What would you like from community? (optional) */}
                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-xs font-mono uppercase font-bold text-[#17354B]">
                    {fields.goals.label}
                  </Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder={fields.goals.placeholder}
                    className="rounded-xl bg-white border border-[#17354B]/15 text-sm text-[#17354B] resize-y"
                  />
                </div>

                {/* 3 Explicit Checkboxes from PDF with shadcn Checkbox */}
                <div className="space-y-4 pt-3 border-t border-[#17354B]/10">
                  
                  {/* Checkbox 1: Community Guidelines (Required) */}
                  <div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="agreedGuidelines"
                        checked={formData.agreedGuidelines}
                        onCheckedChange={(checked) => handleCheckboxChange('agreedGuidelines', !!checked)}
                        className="mt-0.5"
                      />
                      <Label htmlFor="agreedGuidelines" className="text-xs sm:text-sm text-[#17354B] leading-normal font-medium cursor-pointer">
                        {checkboxes.guidelines} <span className="text-[#D96B60]">*</span>
                      </Label>
                    </div>
                    {errors.agreedGuidelines && (
                      <p className="text-xs text-[#D96B60] font-medium mt-1 pl-7">
                        {errors.agreedGuidelines}
                      </p>
                    )}
                  </div>

                  {/* Checkbox 2: Verification Consent (Required) */}
                  <div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="agreedPrivacy"
                        checked={formData.agreedPrivacy}
                        onCheckedChange={(checked) => handleCheckboxChange('agreedPrivacy', !!checked)}
                        className="mt-0.5"
                      />
                      <Label htmlFor="agreedPrivacy" className="text-xs sm:text-sm text-[#17354B] leading-normal font-medium cursor-pointer">
                        {checkboxes.privacy} <span className="text-[#D96B60]">*</span>
                      </Label>
                    </div>
                    {errors.agreedPrivacy && (
                      <p className="text-xs text-[#D96B60] font-medium mt-1 pl-7">
                        {errors.agreedPrivacy}
                      </p>
                    )}
                  </div>

                  {/* Checkbox 3: Updates (Optional) */}
                  <div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="receiveUpdates"
                        checked={formData.receiveUpdates}
                        onCheckedChange={(checked) => handleCheckboxChange('receiveUpdates', !!checked)}
                        className="mt-0.5"
                      />
                      <Label htmlFor="receiveUpdates" className="text-xs sm:text-sm text-[#5A6E7D] leading-normal cursor-pointer">
                        {checkboxes.updates}
                      </Label>
                    </div>
                  </div>

                </div>

                {/* Error Banner if submission fails */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-2.5 text-xs sm:text-sm text-red-700 font-medium">
                    <AlertCircle className="size-4 shrink-0 text-red-600 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit Button with ShimmerButton */}
                <div className="pt-4">
                  <ShimmerButton
                    type="submit"
                    disabled={isSubmitting}
                    background="#17354B"
                    shimmerColor="#2DD4BF"
                    borderRadius="0.75rem"
                    className="w-full text-white hover:bg-[#20445E] shadow-lg shadow-[#17354B]/15 font-bold text-base py-4 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-5 animate-spin" />
                        <span>Reviewing Details...</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-4 text-[#2DD4BF]" />
                        <span>{submitButton}</span>
                      </>
                    )}
                  </ShimmerButton>
                </div>

                {/* Privacy Safeguard Assurance */}
                <div className="pt-2 text-center text-xs font-mono text-[#5A6E7D] flex items-center justify-center gap-1.5">
                  <Lock className="size-3.5 text-[#367D78]" />
                  <span>Credential Confidentiality • Zero Commercial Sharing</span>
                </div>

              </form>
            )}

          </div>
        </div>

      </Container>
    </section>
  );
}