import "./Header.css";
import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

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
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const getClassName = (sectionName: string) => {
		return activeSection === sectionName ? "active-link" : "";
	};

	//Change the languge
	const changeLanguage = () => {
		const newLang = i18n.language === "en" ? "jp" : "en";
		i18n.changeLanguage(newLang);
	};

	return (
		<motion.header
			initial={{ y: "-100%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				delay: 10.2,
				duration: 0.8,
				ease: "easeInOut",
			}}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 100000,
			}}
		>
			<nav>
				<div className="navbar-left">
					<button
						className="navbar-title"
						type="button"
						onClick={onScrollToLanding}
					>
						{t("navbar.name")}
					</button>
				</div>

				{/* Mobile button */}
				<button type="button" className="hamburger-button" onClick={toggleMenu}>
					<RxHamburgerMenu />
				</button>

				<div
					className={`navbar-right ${isMenuOpen ? "mobile-open" : "mobile-closed"}`}
				>
					<div className="close-icon-div">
						<button type="button" className="close-icon" onClick={toggleMenu}>
							<IoCloseSharp size={52} />
						</button>
					</div>
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
		</motion.header>
	);
}
