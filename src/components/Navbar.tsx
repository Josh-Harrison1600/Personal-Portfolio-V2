import "./Navbar.css";
import { useTranslation } from "react-i18next";

export default function Navbar({
	onScrollToAbout,
	onScrollToExperience,
}: {
	onScrollToAbout: () => void;
	onScrollToExperience: () => void;
}) {
	const { t } = useTranslation();

	return (
		<nav>
			<div className="navbar-left">
				<h1>{t("navbar.name")}</h1>
			</div>
			<div className="navbar-right">
				<ul className="nav-links">
					<li>
						<button type="button" onClick={onScrollToAbout}>
							{t("navbar.about")}
						</button>
						<button type="button" onClick={onScrollToExperience}>
							{t("navbar.experience")}
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
