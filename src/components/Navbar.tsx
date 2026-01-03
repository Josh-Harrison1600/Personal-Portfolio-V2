import "./Navbar.css";
import { useTranslation } from "react-i18next";

export default function Navbar({
	onScrollToLanding,
	onScrollToAbout,
	onScrollToExperience,
	onScrollToProjects,
	onScrollToContact,
	activeSection,
}: {
	onScrollToLanding: () => void;
	onScrollToAbout: () => void;
	onScrollToExperience: () => void;
	onScrollToProjects: () => void;
	onScrollToContact: () => void;
	activeSection: string;
}) {
	const { t, i18n } = useTranslation();

	const getClassName = (sectionName: string) => {
		return activeSection === sectionName ? "active-link" : "";
	};

	//Change the languge
	const changeLanguage = () => {
		const newLang = i18n.language === "en" ? "jp" : "en";
		i18n.changeLanguage(newLang);
	};

	return (
		<nav>
			<div className="navbar-left">
				<button
					className={`navbar-title ${getClassName("landing")}`}
					type="button"
					onClick={onScrollToLanding}
				>
					{t("navbar.name")}
				</button>
			</div>
			<div className="navbar-right">
				<ul className="nav-ul">
					<li className="nav-li">
						<button
							type="button"
							className={`nav-btn ${getClassName("about")}`}
							onClick={onScrollToAbout}
						>
							{t("navbar.about")}
						</button>
						<button
							type="button"
							className={`nav-btn ${getClassName("experience")}`}
							onClick={onScrollToExperience}
						>
							{t("navbar.experience")}
						</button>
						<button
							type="button"
							className={`nav-btn ${getClassName("projects")}`}
							onClick={onScrollToProjects}
						>
							{t("navbar.projects")}
						</button>
						<button
							type="button"
							className={`nav-btn ${getClassName("contact")}`}
							onClick={onScrollToContact}
						>
							{t("navbar.contact")}
						</button>
						<button
							type="button"
							className="language-selector-btn"
							onClick={() => changeLanguage()}
						>
							{t("navbar.language")}
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
