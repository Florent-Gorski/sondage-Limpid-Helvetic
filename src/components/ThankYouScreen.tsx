import React from 'react';
import { Lightbulb as Lighthouse, ExternalLink } from 'lucide-react';

interface ThankYouScreenProps {
  firstName?: string;
}

export const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ firstName }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-rose-soft/10 to-orange-soft/10 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Image de fond lumineuse */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      />
      
      {/* Effets de lumière */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-soft/30 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-soft/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Illustration symbolique - rayons de lumière */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border-2 border-orange-soft/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-rose-soft/20 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
        </div>
      </div>
      
      <div className="max-w-2xl text-center animate-fade-in relative z-10">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-rose-soft to-orange-soft rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl animate-pulse">
            <Lighthouse className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {firstName ? `Merci ${firstName}` : 'Merci'} ✨
        </h1>
        
        <p className="font-inter text-lg md:text-xl text-gray-warm mb-8 leading-relaxed">
          Vous venez de faire un pas vers plus de clarté. 
          {firstName && " Vos réponses comptent !"}
        </p>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <p className="font-inter text-gray-800 leading-relaxed">
            Votre vision financière mérite d'être accompagnée avec soin. 
            Nos équipes analysent vos besoins pour vous proposer des solutions vraiment adaptées.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center space-y-6">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 border border-rose-soft text-rose-soft rounded-xl font-inter font-medium hover:bg-rose-soft hover:text-white transition-all duration-300"
          >
            Recommencer le sondage
          </button>
          
          <div className="flex items-center space-x-2 text-sm text-gray-warm">
            <span>✨ Découvrez-en plus sur</span>
            <a 
              href="https://limpid-helvetic.ch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-rose-soft hover:text-orange-soft transition-colors duration-300 font-medium"
            >
              <span>Limpid Helvetic</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};