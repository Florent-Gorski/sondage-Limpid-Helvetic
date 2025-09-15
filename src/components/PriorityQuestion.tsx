import React, { useState } from "react";

type Props = {
  value?: string | null;
  onBack?: () => void;
  onValidate: (value: string) => void;
};

const OPTIONS = [
  { id: "hypotheque", label: "Hypothèque" },
  { id: "retraite", label: "Retraite" },
  { id: "transmission", label: "Transmission familiale" },
  { id: "epargne_enfants", label: "Épargne pour vos enfants" },
  { id: "securite", label: "Sécurité quotidienne" },
];

const PriorityQuestion: React.FC<Props> = ({ value = null, onBack, onValidate }) =>
{
  const [choice, setChoice] = useState<string | null>(value ?? null);
  const canSubmit = !!choice;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) =>
  {
    e.preventDefault();
    onValidate(choice!);
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/bg-priorities.jpg)" }}
      />

      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Si vous pouviez sécuriser un seul aspect aujourd’hui, lequel choisiriez-vous ?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OPTIONS.map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-3 rounded-md border border-black/10 bg-white/80 backdrop-blur px-4 py-3 cursor-pointer hover:brightness-105 ${choice === opt.id ? "ring-2 ring-rose-300" : ""
                    }`}
                >
                  <input
                    type="radio"
                    name="priority"
                    value={opt.id}
                    checked={choice === opt.id}
                    onChange={() => setChoice(opt.id)}
                    className="accent-rose-400"
                  />
                  <span className="text-sm text-neutral-800">{opt.label}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={onBack}
                className="text-sm underline underline-offset-4"
              >
                Retour
              </button>
              <button
                type="submit"
                disabled={!canSubmit}
                className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border border-black/10 shadow-sm bg-white/80 backdrop-blur hover:brightness-105 active:brightness-95 ${!canSubmit ? "opacity-60 cursor-not-allowed" : ""
                  }`}
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default PriorityQuestion;
