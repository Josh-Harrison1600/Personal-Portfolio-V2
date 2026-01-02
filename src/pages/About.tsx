import "./About.css";
import { useTranslation } from "react-i18next";
import AWS from "../assets/aws.svg";
import CSS from "../assets/css-3.svg";
import GIT from "../assets/git-icon.svg";
import MYSQL from "../assets/mysql-icon.svg";
import NODE from "../assets/nodejs-icon.svg";
import POSTGRES from "../assets/postgresql.svg";
import REACT from "../assets/react.svg";
import TAILWIND from "../assets/tailwindcss-icon.svg";
import TERRAFORM from "../assets/terraform-icon.svg";
import TYPESCRIPT from "../assets/typescript-icon.svg";

export default function About() {
	const { t } = useTranslation();

	return (
		<div className="about-div">
			<div className="about-title">
				<h2>{t("about.title")}</h2>
			</div>

			<div className="about-content">
				<div className="about-left">
					<p>{t("about.paragraph")}</p>
				</div>
				<div className="about-right">
					<img src={TYPESCRIPT} alt="TypeScript" />
					<img src={REACT} alt="React" />
					<img src={AWS} alt="AWS" />
					<img src={CSS} alt="CSS" />
					<img src={NODE} alt="Node" />
					<img src={GIT} alt="Git" />
					<img src={MYSQL} alt="MySQL" />
					<img src={POSTGRES} alt="PostgreSQL" />
					<img src={TERRAFORM} alt="Terraform" />
					<img src={TAILWIND} alt="Tailwind" />
				</div>
			</div>
		</div>
	);
}
