import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const baseStyles =
    "px-8 py-4 rounded-xl font-label-md active:scale-95 transition-all";

  const variants = {
    primary:
      "bg-primary text-on-primary shadow-lg shadow-primary/20 hover:translate-y-[-2px]",
    outline:
      "border border-outline text-on-surface hover:bg-surface-container transition-colors",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
