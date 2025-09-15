import { createRoot } from "react-dom/client";
import App from "./App"; // Vite résout .tsx automatiquement
import "./index.css"; // garde si tu as un fichier global, sinon retire

const container = document.getElementById("root");
if (!container) {
  throw new Error('Element #root introuvable dans index.html');
}

const root = createRoot(container);
root.render(<App />);
