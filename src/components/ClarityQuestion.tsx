import React, { useState } from "react";

type Props = {
  value?: number | null;
  onBack?: () => void;
  onValidate: (value: number) => void;
};

const ClarityQuestion: React.FC<Props> = ({ value = null, onBack, onValidate }) =>
{
  const [localValue, setLocalValue] = useState<number | null>(value ?? null);
  const canSubmit = typeof localValue === "number";

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) =>
  {
    e.preventDefault();
    if (typeof localValue === "number") onValidate(localValue);
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/bg-clarity.jpg)" }}
      />

      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">
            À quel point vos finances vous semblent claires aujourd’hui ?
          </h2>
          <p className="text-sm text-neutral-600 mb-4">
            0 = Je suis perdu · 10 = J’ai une vision limpide
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              value={localValue ?? 5}
              onChange={(e) => setLocalValue(Number(e.target.value))}
              aria-label="Niveau de clarté"
              className="w-full h-2 rounded-full bg-neutral-200 appearance-none"
            />
            <style>{`
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                height: 22px; width: 22px; border-radius: 9999px;
                background: linear-gradient(135deg, #fda4af, #fdba74);
                border: 2px solid rgba(0,0,0,0.08);
                box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                margin-top: -10px;
              }
              input[type="range"]::-moz-range-thumb {
                height: 22px; width: 22px; border-radius: 9999px;
                background: linear-gradient(135deg, #fda4af, #fdba74);
                border: 2px solid rgba(0,0,0,0.08);
                box-shadow: 0 2px 6px rgba(0,0,0,0.2);
              }
            `}</style>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={onBack}
                className="text-sm underline underline-offset-4"
              >
                Retour
              </button>
              <div className="flex items-center gap-3">
                <div className="text-sm text-neutral-700">
                  {typeof localValue === "number" ? (
                    <>Votre réponse : <strong>{localValue}/10</strong></>
                  ) : (
                    <>Sélectionnez une valeur</>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border border-black/10 shadow-sm bg-white/80 backdrop-blur hover:brightness-105 active:brightness-95 ${!canSubmit ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                >
                  Valider
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ClarityQuestion;
