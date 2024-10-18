import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ErrorPage from "@/pages/error-page";
import App from "./App.tsx";
import "./index.css";
// import { ReactLenis } from "@studio-freight/react-lenis";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <ReactLenis root> */}
		<App />
		{/* </ReactLenis> */}
	</StrictMode>
);
