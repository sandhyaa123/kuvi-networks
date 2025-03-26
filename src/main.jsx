import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { PostHogProvider } from "posthog-js/react";

const POSTHOG_API_KEY = import.meta.env.VITE_POSTHOG_API_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST;

const postHogOptions = {
  api_host: POSTHOG_HOST,
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PostHogProvider apiKey={POSTHOG_API_KEY} options={postHogOptions}>
      <Router>
        <App />
      </Router>
    </PostHogProvider>
  </StrictMode>
);
