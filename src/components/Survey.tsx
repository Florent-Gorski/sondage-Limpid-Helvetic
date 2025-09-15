import React, { useState, useEffect } from 'react';
import { SurveyResponse } from '../types/survey';
import { ProgressBar } from './ProgressBar';
import { WelcomeScreen } from './WelcomeScreen';
import { EmotionQuestion } from './EmotionQuestion';
import { PriorityQuestion } from './PriorityQuestion';
import { ClarityQuestion } from './ClarityQuestion';
import { VisionQuestion } from './VisionQuestion';
import { ContactForm } from './ContactForm';
import { ThankYouScreen } from './ThankYouScreen';

type SurveyStep = 'welcome' | 'emotion' | 'priority' | 'clarity' | 'vision' | 'contact' | 'thank-you';

export const Survey: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<SurveyStep>('welcome');
  const [responses, setResponses] = useState<Partial<SurveyResponse>>({});

  const stepOrder: SurveyStep[] = ['welcome', 'emotion', 'priority', 'clarity', 'vision', 'contact', 'thank-you'];
  const currentStepIndex = stepOrder.indexOf(currentStep);

  // Sauvegarde automatique dans localStorage
  useEffect(() => {
    if (Object.keys(responses).length > 0) {
      localStorage.setItem('limpid-survey-responses', JSON.stringify(responses));
    }
  }, [responses]);

  // Récupération des réponses sauvegardées
  useEffect(() => {
    const savedResponses = localStorage.getItem('limpid-survey-responses');
    if (savedResponses) {
      setResponses(JSON.parse(savedResponses));
    }
  }, []);

  const updateResponse = (key: keyof SurveyResponse, value: any) => {
    setResponses(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < stepOrder.length) {
      setCurrentStep(stepOrder[nextIndex]);
    }
  };

  const handleStart = () => setCurrentStep('emotion');

  const handleEmotionAnswer = (emotion: string) => {
    updateResponse('emotion', emotion);
    setTimeout(nextStep, 300);
  };

  const handlePriorityAnswer = (priority: string) => {
    updateResponse('priority', priority);
    setTimeout(nextStep, 300);
  };

  const handleClarityAnswer = (clarity: number) => {
    updateResponse('clarity', clarity);
    setTimeout(nextStep, 1000);
  };

  const handleVisionAnswer = (vision: string) => {
    updateResponse('vision', vision);
    setTimeout(nextStep, 300);
  };

  const handleContactSubmit = (contact: { firstName: string; email: string }) => {
    updateResponse('contact', contact);
    setTimeout(() => setCurrentStep('thank-you'), 300);
  };

  const handleContactSkip = () => {
    setTimeout(() => setCurrentStep('thank-you'), 300);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStart} />;
      case 'emotion':
        return (
          <EmotionQuestion 
            onAnswer={handleEmotionAnswer}
            initialValue={responses.emotion}
          />
        );
      case 'priority':
        return (
          <PriorityQuestion 
            onAnswer={handlePriorityAnswer}
            initialValue={responses.priority}
          />
        );
      case 'clarity':
        return (
          <ClarityQuestion 
            onAnswer={handleClarityAnswer}
            initialValue={responses.clarity}
          />
        );
      case 'vision':
        return (
          <VisionQuestion 
            onAnswer={handleVisionAnswer}
            initialValue={responses.vision}
          />
        );
      case 'contact':
        return (
          <ContactForm 
            onSubmit={handleContactSubmit}
            onSkip={handleContactSkip}
          />
        );
      case 'thank-you':
        return <ThankYouScreen firstName={responses.contact?.firstName} />;
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <>
      {currentStep !== 'welcome' && currentStep !== 'thank-you' && (
        <ProgressBar 
          currentStep={currentStepIndex} 
          totalSteps={stepOrder.length - 2} // Exclut welcome et thank-you
        />
      )}
      {renderCurrentStep()}
    </>
  );
};