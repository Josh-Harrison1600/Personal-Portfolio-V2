import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./i18n.ts";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: <this is the default react config>
createRoot(document.getElementById("root")!).render(
	<MantineProvider defaultColorScheme="dark">
		<Suspense>
			<StrictMode>
				<App />
			</StrictMode>
		</Suspense>
	</MantineProvider>,
);
