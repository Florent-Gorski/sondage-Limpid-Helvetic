import React from "react";

type NextButtonProps = {
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

const NextButton: React.FC<NextButtonProps> = ({
  label = "Valider",
  disabled = false,
  onClick,
  type = "submit",
}) =>
{
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition
        ${disabled
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : "bg-gradient-to-r from-rose-300 to-orange-300 text-neutral-900 hover:brightness-105 active:brightness-95"
        } shadow-md`}
    >
      {label}
    </button>
  );
};

export default NextButton;
