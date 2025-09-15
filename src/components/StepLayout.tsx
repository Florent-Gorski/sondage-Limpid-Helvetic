import React from "react";

type StepLayoutProps = {
  /** Background image shown full-bleed behind the step */
  backgroundImageUrl: string;
  /** Optional overlay gradient opacity (0–100) */
  overlayOpacity?: number;
  /** Optional title at the top of the card */
  title?: React.ReactNode;
  /** Content of the step (form fields, slider, etc.) */
  children: React.ReactNode;
  /** Footer (e.g., Back/Next actions) */
  footer?: React.ReactNode;
};

const StepLayout: React.FC<StepLayoutProps> = ({
  backgroundImageUrl,
  overlayOpacity = 60,
  title,
  children,
  footer
}) =>
{
  return (
    <div className="relative min-h-screen w-full bg-[#FFFEF7]">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        aria-hidden="true"
      />
      {/* Gradient overlay for readability */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 248, 240, 0.88) 100%)",
          opacity: overlayOpacity / 100
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <div className="rounded-2xl bg-white/80 backdrop-blur-md shadow-xl ring-1 ring-black/5">
            <div className="p-6 sm:p-8">
              {title && (
                <h1 className="mb-4 text-2xl font-semibold tracking-tight text-neutral-900">
                  {title}
                </h1>
              )}
              <div className="space-y-6">{children}</div>
            </div>
            {footer && (
              <div className="flex items-center justify-between gap-3 border-t border-black/5 p-4 sm:p-6">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepLayout;
