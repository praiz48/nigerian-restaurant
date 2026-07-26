import React, { useState } from "react";
import {
  diningGuidelines,
  timeSlots,
  guestOptions,
} from "../../utils/reservationsData";

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "19:00",
    guests: "2 People",
    specialRequests: "",
  });

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
    // Handle form submission here
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
      {/* Left Column - Info */}
      <div className="lg:col-span-4 space-y-stack-md">
        <h2 className="font-headline-md text-headline-md text-primary">
          Table Reservation
        </h2>
        <p className="text-on-surface-variant font-body-md">
          For parties larger than 8, please contact our concierge team directly
          to curate a bespoke experience.
        </p>
        <div className="p-6 bg-surface-container-low rounded-[2rem] border border-outline-variant/30">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-primary">info</span>
            <span className="font-label-md text-on-surface">
              Dining Guidelines
            </span>
          </div>
          <ul className="space-y-3 font-body-md text-on-surface-variant">
            {diningGuidelines.map((guideline, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-secondary font-bold text-lg">•</span>
                {guideline}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="lg:col-span-8 bg-surface-container-lowest p-6 md:p-12 rounded-[2.5rem] ambient-shadow border border-outline-variant/10">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-stack-md"
        >
          {/* Full Name */}
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 form-focus transition-all text-on-surface"
              placeholder="Adewale Okafor"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 form-focus transition-all text-on-surface"
              placeholder="example@domain.com"
              required
            />
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant ml-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 form-focus transition-all text-on-surface"
              required
            />
          </div>

          {/* Time & Guests */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-md text-on-surface-variant ml-1">
                Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 form-focus transition-all text-on-surface"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-on-surface-variant ml-1">
                Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 form-focus transition-all text-on-surface"
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
          <div className="md:col-span-2 space-y-2">
            <label className="font-label-md text-on-surface-variant ml-1">
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 form-focus transition-all text-on-surface resize-none"
              placeholder="Dietary requirements, anniversary, or preferred seating..."
              rows={4}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full md:w-auto bg-secondary text-white px-12 py-4 rounded-xl font-label-md text-lg hover:bg-secondary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-secondary/20"
            >
              Confirm Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
