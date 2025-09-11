import React from "react";

function Logo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16",
    xlarge: "w-20 h-20",
  };

  return (
    <img
      src="./logo.png"
      alt="MediQARA Tech Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
}

export default Logo;
