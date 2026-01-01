import "./Contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
	const { t } = useTranslation();

	return (
		<div>
			<h2>{t("contact.title")}</h2>
		</div>
	);
}
