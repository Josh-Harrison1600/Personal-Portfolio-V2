import "./About.css";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import AWS from "../assets/aws.svg";
import CSS from "../assets/css-3.svg";
import GIT from "../assets/git-icon.svg";
import NODE from "../assets/nodejs-icon.svg";
import PYTHON from "../assets/Python.png";
import POSTGRES from "../assets/postgresql.svg";
import REACT from "../assets/react.svg";
import TAILWIND from "../assets/tailwindcss-icon.svg";
import TERRAFORM from "../assets/terraform-icon.svg";
import TYPESCRIPT from "../assets/typescript-icon.svg";
import RESUME from "../resume/Josh Harrison Resume.pdf";
export default function About() {
	const { t } = useTranslation();

	return (
		<motion.div
			className="about-div"
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.8,
				delay: 0.2, // Reduced delay so it feels snappier
				ease: [0, 0.71, 0.2, 1.01],
			}}
		>
			<div className="about-header">
				<h2>{t("about.header")}</h2>
			</div>
			<div className="about-content">
				<div className="about-left">
					<p className="about-paragraph">{t("about.paragraph-one")}</p>
					<p className="about-paragraph">{t("about.paragraph-two")}</p>
					<p className="about-paragraph">{t("about.paragraph-three")}</p>
					<p className="about-paragraph">{t("about.paragraph-four")}</p>
					<a href={RESUME} download className="download-resume">
						<span className="download-text">{t("about.download")}</span>
					</a>
				</div>
				<div className="about-right">
					<img src={TYPESCRIPT} alt="TypeScript" />
					<img src={REACT} alt="React" />
					<img src={AWS} alt="AWS" />
					<img src={CSS} alt="CSS" />
					<img src={NODE} alt="Node" />
					<img src={GIT} alt="Git" />
					<img src={PYTHON} alt="Python" />
					<img src={POSTGRES} alt="PostgreSQL" />
					<img src={TERRAFORM} alt="Terraform" />
					<img src={TAILWIND} alt="Tailwind" />
				</div>
			</div>
		</motion.div>
	);
}
