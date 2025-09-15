import React, { useState } from "react";

type Props = {
  value?: string | null;
  onBack?: () => void;
  onValidate: (value: string) => void;
};

const VisionQuestion: React.FC<Props> = ({ value = null, onBack, onValidate }) =>
{
  const [text, setText] = useState<string>(value ?? "");
  const canSubmit = text.trim().length > 0;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) =>
  {
    e.preventDefault();
    onValidate(text.trim());
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/bg-vision.jpg)" }}
      />

      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Dans 10 ans, que souhaiteriez-vous avoir construit grâce à vos choix financiers ?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <textarea
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Réponse libre (vous pouvez ajouter un emoji si vous le souhaitez)…"
              className="w-full rounded-md border border-black/10 bg-white/80 backdrop-blur px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-300"
            />

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

export default VisionQuestion;
