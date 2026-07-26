import React from "react";
import { openingHours } from "../../utils/reservationsData";

const VisitUs: React.FC = () => {
  return (
    <section className="bg-surface-container-high/40 py-16 md:py-24">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Left Column - Info */}
          <div className="flex-1 space-y-stack-md">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Visit Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                  <h3 className="font-headline-sm text-headline-sm">
                    Our Location
                  </h3>
                </div>
                <p className="font-body-md text-on-surface-variant">
                  14 Victoria Island Extension,
                  <br />
                  Lekki-Epe Expressway,
                  <br />
                  Lagos, Nigeria
                </p>
              </div>

              {/* Opening Hours */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                  <h3 className="font-headline-sm text-headline-sm">
                    Opening Hours
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-body-md text-on-surface-variant">
                  {openingHours.map((item, index) => (
                    <React.Fragment key={index}>
                      <span className="font-label-md text-on-surface">
                        {item.day}
                      </span>
                      <span>{item.hours}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 md:col-span-2">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">
                    contact_support
                  </span>
                  <h3 className="font-headline-sm text-headline-sm">
                    Contact Details
                  </h3>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-6 text-on-surface-variant font-body-md">
                  <a
                    href="tel:+234800OJA"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      call
                    </span>
                    +234 (0) 800 OJA FINE
                  </a>
                  <a
                    href="mailto:hello@ojafinedining.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      mail
                    </span>
                    hello@ojafinedining.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="flex-1">
            <div className="h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden ambient-shadow border-4 border-white">
              <div
                className="w-full h-full bg-surface-container grayscale hover:grayscale-0 transition-all duration-700 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuUYVYnPAMj28vUfxEJHo3uAYQcIO_MIpMeNrSQdjGRRzeEu87RoERE2vS10-P4yKfIJpLs62c44rfsfpr8UA_-WbrT6uce2PH4SCvmYGBIqy0eII0LWvBMAZD5MTqawPPsQ6piIyHqxUbIZfxn8r5mMUV4GQCbWkLqMHn1hFi_lNI1JYobsDcVxDk7-xdBSxV-tCc207-FHpA9___fI2dfOVVyzQTSPxF0Zn9JS1dRoVnVGxbJx2vycX_-6T0KHPrWHwWwczNNmU')`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
