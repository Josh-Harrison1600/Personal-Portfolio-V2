import "./Projects.css";
import { useTranslation } from "react-i18next";

export default function Projects() {
	const { t } = useTranslation();

	return (
		<div>
			<h2>{t("projects.title")}</h2>
		</div>
	);
}
