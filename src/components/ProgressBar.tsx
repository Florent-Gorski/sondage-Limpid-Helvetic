import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-light z-50">
      <div
        className="h-full bg-gradient-to-r from-rose-soft to-orange-soft transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};