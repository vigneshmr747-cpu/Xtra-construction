import {FormEvent, useState, useEffect} from 'react';
import {Phone, Mail, MapPin, CheckCircle2, AlertCircle} from 'lucide-react';

interface QuoteSectionProps {
  prefilledSubject?: string;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  department: string;
  message: string;
}

export function QuoteSection({prefilledSubject = ''}: QuoteSectionProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: prefilledSubject,
    department: 'Business Department',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setForm((prev) => ({...prev, subject: prefilledSubject}));
      setSubmitted(false);
    }
  }, [prefilledSubject]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please describe your project scope (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: #243344 Dark Navy Info Panel (extends visually behind yellow form) */}
          <div className="lg:col-span-6 bg-[#243344] text-white p-8 sm:p-12 lg:py-20 lg:pl-14 lg:pr-24 flex flex-col justify-between">
            <div>
              <p className="font-display text-sm font-medium tracking-[0.16em] text-[#f4c03b] mb-3">
                INTERESTED IN CONSTRUCTION?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.15] text-balance mb-6">
                Request a free and fair quote
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-10">
                Share your architectural plans, commercial build-out timeline, or civil paving scope.
                Our estimating engineers respond within one business day with a transparent
                itemized proposal.
              </p>

              <div className="space-y-4 mb-10">
                <a
                  href="tel:+18182345678"
                  className="flex items-center gap-3.5 text-slate-200 hover:text-[#f4c03b] transition-colors"
                >
                  <span className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 text-[#f4c03b]">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base font-semibold tabular-nums">
                    +1 (818) 23 45 678
                  </span>
                </a>
                <a
                  href="mailto:estimates@xtrabuild.com"
                  className="flex items-center gap-3.5 text-slate-200 hover:text-[#f4c03b] transition-colors"
                >
                  <span className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 text-[#f4c03b]">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base font-semibold">
                    estimates@xtrabuild.com
                  </span>
                </a>
                <div className="flex items-center gap-3.5 text-slate-200">
                  <span className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 text-[#f4c03b]">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base">
                    480 Wilshire Industrial Blvd, Los Angeles, CA
                  </span>
                </div>
              </div>
            </div>

            {/* Clean Quantitative Proof Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/15">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#f4c03b] tabular-nums">
                  24+
                </div>
                <div className="text-xs text-slate-300 mt-1">Years Active</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#f4c03b] tabular-nums">
                  450+
                </div>
                <div className="text-xs text-slate-300 mt-1">Builds Delivered</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#f4c03b] tabular-nums">
                  98%
                </div>
                <div className="text-xs text-slate-300 mt-1">On-Time Handover</div>
              </div>
            </div>
          </div>

          {/* Right Column: Overlapping #f4c03b Gold Quote Card */}
          <div className="lg:col-span-6 lg:-ml-12 lg:my-10 relative z-10">
            <div className="bg-[#f4c03b] p-8 sm:p-12 shadow-[0_20px_60px_rgba(36,51,68,0.2)] h-full flex flex-col justify-center">
              {submitted ? (
                <div
                  role="status"
                  className="bg-white p-8 text-[#243344] shadow-[0_10px_30px_rgba(36,51,68,0.12)]"
                >
                  <div className="w-12 h-12 bg-[#243344] text-[#f4c03b] flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    Quote Request Received
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-[#243344]">{form.name}</span>.
                    Your inquiry for the{' '}
                    <span className="font-semibold text-[#243344]">{form.department}</span> has been
                    logged. Our senior estimator will reach out to{' '}
                    <span className="font-semibold text-[#243344]">{form.email}</span> within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        subject: '',
                        department: 'Business Department',
                        message: '',
                      });
                    }}
                    className="bg-[#243344] hover:bg-[#1a2533] text-white font-display font-semibold text-sm px-6 py-3 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-xs font-bold text-[#243344] mb-1.5"
                      >
                        Your Name (required)
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => {
                          setForm({...form, name: e.target.value});
                          if (errors.name) setErrors({...errors, name: undefined});
                        }}
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-white text-[#243344] placeholder:text-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#243344]"
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-[#7f1d1d]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-xs font-bold text-[#243344] mb-1.5"
                      >
                        Your Email (required)
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => {
                          setForm({...form, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: undefined});
                        }}
                        placeholder="marcus@company.com"
                        className="w-full bg-white text-[#243344] placeholder:text-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#243344]"
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-[#7f1d1d]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="quote-subject"
                        className="block text-xs font-bold text-[#243344] mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="quote-subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({...form, subject: e.target.value})}
                        placeholder="Commercial Building Estimate"
                        className="w-full bg-white text-[#243344] placeholder:text-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#243344]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-department"
                        className="block text-xs font-bold text-[#243344] mb-1.5"
                      >
                        Department
                      </label>
                      <select
                        id="quote-department"
                        value={form.department}
                        onChange={(e) => setForm({...form, department: e.target.value})}
                        className="w-full bg-white text-[#243344] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#243344]"
                      >
                        <option value="Business Department">Business Department</option>
                        <option value="Personal Department">Personal Department</option>
                        <option value="Support Department">Support Department</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-message"
                      className="block text-xs font-bold text-[#243344] mb-1.5"
                    >
                      Your Message (required)
                    </label>
                    <textarea
                      id="quote-message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => {
                        setForm({...form, message: e.target.value});
                        if (errors.message) setErrors({...errors, message: undefined});
                      }}
                      placeholder="Tell us about your project location, approximate square footage, and target timeline..."
                      className="w-full bg-white text-[#243344] placeholder:text-slate-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#243344] resize-y"
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-[#7f1d1d]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#243344] hover:bg-white text-white hover:text-[#243344] font-display font-bold text-sm sm:text-base py-4 px-8 transition-colors duration-200 shadow-[0_10px_25px_rgba(36,51,68,0.2)] cursor-pointer"
                  >
                    Send Quote Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
