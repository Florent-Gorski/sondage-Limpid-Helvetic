export interface SurveyResponse {
  emotion: string;
  priority: string;
  clarity: number;
  vision: string;
  contact?: {
    firstName: string;
    email: string;
  };
}

export interface Question {
  id: string;
  type: 'choice' | 'scale' | 'text' | 'contact';
  title: string;
  subtitle?: string;
  options?: Array<{
    value: string;
    label: string;
    icon: string;
  }>;
}