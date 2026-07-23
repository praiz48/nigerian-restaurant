import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-container-max mx-auto px-gutter md:px-margin-desktop ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
