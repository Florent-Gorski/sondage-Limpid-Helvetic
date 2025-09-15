import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface ContactFormProps {
  onSubmit: (contact: { firstName: string; email: string }) => void;
  onSkip: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onSkip }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && email.trim()) {
      onSubmit({ firstName: firstName.trim(), email: email.trim() });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-rose-soft/5 to-orange-soft/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-slide-up">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-soft to-orange-soft rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Recevez des conseils personnalisés
          </h2>
          
          <p className="font-inter text-gray-warm">
            Laissez vos coordonnées pour recevoir du contenu adapté à vos besoins (optionnel)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="space-y-6">
            <div>
              <label className="block font-inter font-medium text-gray-800 mb-2">
                Prénom
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-light rounded-xl font-inter focus:outline-none focus:ring-2 focus:ring-rose-soft/50 focus:border-rose-soft"
                placeholder="Votre prénom"
              />
            </div>
            
            <div>
              <label className="block font-inter font-medium text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-light rounded-xl font-inter focus:outline-none focus:ring-2 focus:ring-rose-soft/50 focus:border-rose-soft"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              type="button"
              onClick={onSkip}
              className="flex-1 px-6 py-3 border border-gray-light rounded-xl font-inter font-medium text-gray-warm hover:border-gray-warm transition-all duration-300"
            >
              Passer cette étape
            </button>
            <button
              type="submit"
              disabled={!firstName.trim() || !email.trim()}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-rose-soft to-orange-soft text-white rounded-xl font-inter font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};