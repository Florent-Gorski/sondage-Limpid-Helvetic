import React from "react";

type Props = {
  onRestart?: () => void;
};

const FinalScreen: React.FC<Props> = ({ onRestart }) =>
{
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/bg-final.jpg)" }}
      />

      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Merci pour vos réponses ✨
          </h2>
          <p className="text-neutral-700">
            Vous venez de faire un pas vers plus de clarté. Si vous souhaitez en savoir plus,
            découvrez notre approche.
          </p>

          <div className="mt-6 flex items-center justify-between">
            <a
              href="https://limpid-helvetic.ch"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline underline-offset-4 decoration-rose-300 hover:decoration-orange-300"
            >
              ✨ Découvrir Limpid-Helvetic
            </a>

            {onRestart && (
              <button
                type="button"
                onClick={onRestart}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium border border-black/10 shadow-sm bg-white/80 backdrop-blur hover:brightness-105 active:brightness-95"
              >
                Recommencer
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalScreen;
