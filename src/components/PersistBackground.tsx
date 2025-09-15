import React from "react";

/**
 * PersistBackground
 * Renders a fixed, full-viewport background image behind your existing layout
 * WITHOUT touching your current structure or styles.
 *
 * Usage (place once at the top of each step component):
 *   <PersistBackground src="/images/bg-welcome.jpg" />
 *
 * This component only adds a background layer at z-index -10 (behind everything).
 */
type Props = {
  /** image URL (public path recommended, e.g. /images/xxx.jpg) */
  src: string;
  /** optional extra classes for the background <div> */
  className?: string;
  /** optional inline styles override */
  style?: React.CSSProperties;
};

const PersistBackground: React.FC<Props> = ({ src, className = "", style }) => {
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 -z-10 bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})`, ...style }}
    />
  );
};

export default PersistBackground;
