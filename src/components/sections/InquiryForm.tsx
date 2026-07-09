import React from "react";
import { Link } from "react-router-dom";
import { HAS_REAL_EMAIL, HAS_REAL_PHONE, HAS_REAL_WHATSAPP, WHATSAPP_URL } from "../../content/brand";
import { FadeUp } from "../motion/PremiumReveal";

export type InquiryFormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  guests: string;
  preferredDates: string;
  roomPreference: string;
  requirements: string;
  message: string;
};

type InquiryFormProps = {
  labels: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    guests: string;
    preferredDates: string;
    preferredDatesPlaceholder?: string;
    roomPreference: string;
    requirements: string;
    message: string;
    submit: string;
    whatsapp: string;
    roomOptions: readonly string[];
    requirementOptions: readonly string[];
    success: string;
  };
  compact?: boolean;
};

const initialState: InquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  guests: "",
  preferredDates: "",
  roomPreference: "",
  requirements: "",
  message: "",
};

export default function InquiryForm({ labels, compact = false }: InquiryFormProps) {
  const [form, setForm] = React.useState<InquiryFormData>(initialState);
  const [submitted, setSubmitted] = React.useState(false);

  const update = (field: keyof InquiryFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ready for backend: POST /api/inquiries with InquiryFormData
    console.info("[inquiry-form]", form);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-surface border border-surface-container-high px-4 py-3 text-sm text-primary placeholder:text-on-surface-variant/60 rounded-sm focus:outline-none focus:border-secondary";

  return (
    <FadeUp>
      <form
        onSubmit={handleSubmit}
        className="bg-surface border border-surface-container-high p-8 md:p-10 rounded shadow-sm space-y-5"
        data-form="inquiry"
      >
        <div className={`grid grid-cols-1 ${compact ? "md:grid-cols-2" : "md:grid-cols-2"} gap-5`}>
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary">{labels.fullName}</span>
            <input required type="text" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className={inputClass} />
          </label>
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary">{labels.email}</span>
            <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={`${inputClass} input-ltr`} />
          </label>
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary">{labels.phone}</span>
            <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={`${inputClass} input-ltr`} />
          </label>
          <label className="block space-y-1.5">
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary">{labels.country}</span>
            <input type="text" value={form.country} onChange={(e) => update("country", e.target.value)} className={inputClass} />
          </label>
          {!compact && (
            <>
              <label className="block space-y-1.5">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary">{labels.guests}</span>
                <input type="text" value={form.guests} onChange={(e) => update("guests", e.target.value)} className={inputClass} />
              </label>
              <label className="block space-y-1.5">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary">{labels.preferredDates}</span>
                <input
                  type="text"
                  value={form.preferredDates}
                  onChange={(e) => update("preferredDates", e.target.value)}
                  className={inputClass}
                  placeholder={labels.preferredDatesPlaceholder ?? ""}
                />
              </label>
              <label className="block space-y-1.5 md:col-span-2">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary">{labels.roomPreference}</span>
                <select value={form.roomPreference} onChange={(e) => update("roomPreference", e.target.value)} className={inputClass}>
                  <option value="">{labels.roomPreference}</option>
                  {labels.roomOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="block space-y-1.5 md:col-span-2">
                <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary">{labels.requirements}</span>
                <select value={form.requirements} onChange={(e) => update("requirements", e.target.value)} className={inputClass}>
                  <option value="">{labels.requirements}</option>
                  {labels.requirementOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            </>
          )}
          <label className={`block space-y-1.5 ${compact ? "md:col-span-2" : "md:col-span-2"}`}>
            <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary">{labels.message}</span>
            <textarea
              rows={compact ? 4 : 5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={`${inputClass} resize-y min-h-[120px]`}
            />
          </label>
        </div>

        {submitted ? (
          <p className="text-sm text-secondary font-medium text-center pt-2" role="status">
            {labels.success}
          </p>
        ) : null}

        {!submitted ? (
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button type="submit" className="btn-premium-hover flex-1 bg-primary text-on-primary hover:bg-secondary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm cursor-pointer">
            {labels.submit}
          </button>
          {HAS_REAL_WHATSAPP ? (
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-hover flex-1 text-center border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              {labels.whatsapp}
            </a>
          ) : (
            <Link
              to="/contact"
              className="btn-premium-hover flex-1 text-center border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary py-3.5 font-label-caps text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              {labels.whatsapp}
            </Link>
          )}
        </div>
        ) : null}
      </form>
    </FadeUp>
  );
}
