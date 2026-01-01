import "./Navbar.css";
import { useTranslation } from "react-i18next";

export default function Navbar({
	onScrollToAbout,
	onScrollToExperience,
	onScrollToProjects,
	onScrollToContact,
}: {
	onScrollToAbout: () => void;
	onScrollToExperience: () => void;
	onScrollToProjects: () => void;
	onScrollToContact: () => void;
}) {
	const { t } = useTranslation();

	return (
		<nav>
			<div className="navbar-left">
				<h1>{t("navbar.name")}</h1>
			</div>
			<div className="navbar-right">
				<ul className="nav-ul">
					<li className="nav-li">
						<button type="button" onClick={onScrollToAbout}>
							{t("navbar.about")}
						</button>
						<button type="button" onClick={onScrollToExperience}>
							{t("navbar.experience")}
						</button>
						<button type="button" onClick={onScrollToProjects}>
							{t("navbar.projects")}
						</button>
						<button type="button" onClick={onScrollToContact}>
							{t("navbar.contact")}
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
