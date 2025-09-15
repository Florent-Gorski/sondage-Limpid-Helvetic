import React from "react";

type Props = {
  onStart: () => void;
};

const WelcomeScreen: React.FC<Props> = ({ onStart }) =>
{
  return (
    <>
      {/* Fond persistant – image plein écran derrière ton design */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/bg-welcome.jpg)" }}
      />

      {/* Contenu d’origine (structure légère, rien d’imposé visuellement) */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-neutral-900">
              La clarté commence par une question
            </h1>
            <p className="mt-2 text-neutral-700">
              Un sondage court (2 minutes) pour mieux comprendre vos besoins
              financiers et vous offrir du contenu vraiment utile. Vos réponses
              sont anonymes.
            </p>
          </header>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onStart}
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border border-black/10 shadow-sm bg-white/80 backdrop-blur hover:brightness-105 active:brightness-95"
            >
              Commencer
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeScreen;
