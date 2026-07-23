import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {badge && (
        <span className="font-label-sm text-primary uppercase tracking-widest bg-primary-fixed px-4 py-1 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="font-headline-md text-on-surface mt-4">{title}</h2>
      {subtitle && (
        <p className="font-body-lg text-on-surface-variant mt-2 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
