import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  User,
  Mail,
  Calendar,
  Clock,
  Users,
  MessageSquare,
  Info,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  diningGuidelines,
  timeSlots,
  guestOptions,
} from "../../utils/reservationsData";

gsap.registerPlugin(ScrollTrigger);

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "19:00",
    guests: "2 People",
    specialRequests: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Map icon to each field
  const fieldIcons = {
    name: User,
    email: Mail,
    date: Calendar,
    time: Clock,
    guests: Users,
    specialRequests: MessageSquare,
  };

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
    >
      {/* Left Column - Info */}
      <div ref={infoRef} className="lg:col-span-4 space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-label-sm text-primary uppercase tracking-widest">
              Reserve Your Table
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Book Your Experience
          </h2>
          <p className="text-on-surface-variant font-body-md mt-3 leading-relaxed">
            For parties larger than 8, please contact our concierge team
            directly to curate a bespoke experience.
          </p>
        </div>

        {/* Dining Guidelines */}
        <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20 hover:border-primary/20 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Info className="w-4 h-4 text-primary" />
            </div>
            <span className="font-label-md text-on-surface">
              Dining Guidelines
            </span>
          </div>
          <ul className="space-y-3">
            {diningGuidelines.map((guideline, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-on-surface-variant font-body-md text-sm"
              >
                <CheckCircle className="w-4 h-4 text-herb-green flex-shrink-0 mt-0.5" />
                <span>{guideline}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
            <p className="font-display-lg text-headline-sm text-primary">20+</p>
            <p className="font-label-sm text-on-surface-variant/60 text-xs">
              Years
            </p>
          </div>
          <div className="text-center p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
            <p className="font-display-lg text-headline-sm text-primary">50+</p>
            <p className="font-label-sm text-on-surface-variant/60 text-xs">
              Dishes
            </p>
          </div>
          <div className="text-center p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
            <p className="font-display-lg text-headline-sm text-primary">
              4.9★
            </p>
            <p className="font-label-sm text-on-surface-variant/60 text-xs">
              Rating
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div
        ref={formRef}
        className="lg:col-span-8 bg-surface-container-lowest p-6 md:p-10 rounded-3xl ambient-shadow border border-outline-variant/10"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-primary rounded-full"></div>
          <h3 className="font-headline-sm text-headline-sm">
            Reservation Details
          </h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="font-label-sm text-on-surface-variant ml-1 flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              className={`w-full bg-surface-container-low border rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all duration-300 text-sm ${
                focusedField === "name"
                  ? "border-primary ring-4 ring-primary/10"
                  : "border-outline-variant/30 hover:border-outline-variant/60"
              }`}
              placeholder="Adewale Okafor"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="font-label-sm text-on-surface-variant ml-1 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              className={`w-full bg-surface-container-low border rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all duration-300 text-sm ${
                focusedField === "email"
                  ? "border-primary ring-4 ring-primary/10"
                  : "border-outline-variant/30 hover:border-outline-variant/60"
              }`}
              placeholder="example@domain.com"
              required
            />
          </div>

          {/* Date */}
          <div className="space-y-1.5">
            <label className="font-label-sm text-on-surface-variant ml-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              onFocus={() => handleFocus("date")}
              onBlur={handleBlur}
              className={`w-full bg-surface-container-low border rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all duration-300 text-sm ${
                focusedField === "date"
                  ? "border-primary ring-4 ring-primary/10"
                  : "border-outline-variant/30 hover:border-outline-variant/60"
              }`}
              required
            />
          </div>

          {/* Time + Guests */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-label-sm text-on-surface-variant ml-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3.5 text-on-surface transition-all duration-300 text-sm hover:border-outline-variant/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="font-label-sm text-on-surface-variant ml-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3.5 text-on-surface transition-all duration-300 text-sm hover:border-outline-variant/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                {guestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="md:col-span-2 space-y-1.5">
            <label className="font-label-sm text-on-surface-variant ml-1 flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" />
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              onFocus={() => handleFocus("specialRequests")}
              onBlur={handleBlur}
              className={`w-full bg-surface-container-low border rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/40 transition-all duration-300 text-sm resize-none ${
                focusedField === "specialRequests"
                  ? "border-primary ring-4 ring-primary/10"
                  : "border-outline-variant/30 hover:border-outline-variant/60"
              }`}
              placeholder="Dietary requirements, anniversary, or preferred seating..."
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full bg-secondary text-white px-8 py-4 rounded-xl font-label-md text-base hover:bg-secondary/90 hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 group"
            >
              <span>Confirm Reservation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <p className="text-center text-on-surface-variant/50 font-label-sm text-xs mt-3">
              ✦ No booking fees · Free cancellation · Instant confirmation
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
