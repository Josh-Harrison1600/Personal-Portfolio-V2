import "./Landing.css";
import { useTranslation } from "react-i18next";

export default function Landing({
	onScrollToAbout,
}: {
	onScrollToAbout: () => void;
}) {
	const { t } = useTranslation();
	return (
		<div>
			<h2>{t("landing.greeting")}</h2>
			<button type="button" onClick={onScrollToAbout}>
				Get Started
			</button>
		</div>
	);
}
