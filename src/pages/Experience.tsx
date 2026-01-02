import "./Experience.css";
import { useTranslation } from "react-i18next";
import { FaLaptop, FaRegBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import AWS from "../assets/aws.svg";
import CLOUDFRONT from "../assets/aws-cloudfront.svg";
import R53 from "../assets/aws-route53.svg";
import S3 from "../assets/aws-s3.svg";
import CSS from "../assets/css-3.svg";
import GIT from "../assets/git-icon.svg";
import GITHUBACTIONS from "../assets/github-actions.svg";
import MONGO from "../assets/mongodb-icon.svg";
import NODE from "../assets/nodejs-icon.svg";
import OAUTH from "../assets/oauth.svg";
import PINECONE from "../assets/pinecone-icon.svg";
import REACT from "../assets/react.svg";
import RQUERY from "../assets/react-query-icon.svg";
import TAILWIND from "../assets/tailwindcss-icon.svg";
import TERRAFORM from "../assets/terraform-icon.svg";
import TYPESCRIPT from "../assets/typescript-icon.svg";
import VITE from "../assets/vitejs.svg";
import VTEST from "../assets/vitest.svg";

export default function Experience() {
	const { t } = useTranslation();

	return (
		<div className="experience-div">
			<div className="experience-title">
				<h2>{t("experience.title")}</h2>
			</div>

			<div className="experience-content">
				{/* HENNGE */}
				<div className="hennge">
					<div className="skills-learnt">
						<h2>Skills Learnt</h2>
						<div className="skills-images">
							<img src={AWS} alt="AWS" />
							<img src={CSS} alt="CSS" />
							<img src={GIT} alt="Git" />
							<img src={GITHUBACTIONS} alt="Git" />
							<img src={REACT} alt="React" />
							<img src={RQUERY} alt="React" />
							<img src={OAUTH} alt="React" />
							<img src={TYPESCRIPT} alt="TypeScript" />
							<img src={TERRAFORM} alt="Terraform" />
							<img src={S3} alt="S3" />
							<img src={R53} alt="Route53" />
							<img src={CLOUDFRONT} alt="CloudFront" />
							<img src={VITE} alt="Vite" />
							<img src={VTEST} alt="ViteTest" />
						</div>
					</div>
					<div className="company-information">
						<h2 className="year-h2">2025</h2>
						<div className="company-title">
							<h3>
								<FaRegBuilding />
								HENNGE
							</h3>
							<h3>
								<FaLaptop />
								Front-end Developer Intern
							</h3>
							<h3>
								<FaLocationDot />
								{t("experience.tokyo")}
								<img
									className="country-img"
									src="https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"
									alt="Japan"
								/>
							</h3>
						</div>
						<p className="company-p">{t("experience.hennge")}</p>
					</div>
				</div>

				{/* General Data */}
				<div className="general-data">
					<div className="skills-learnt">
						<h2>Skills Learnt</h2>
						<div className="skills-images">
							<img src={CSS} alt="AWS" />
							<img src={TAILWIND} alt="Tailwind" />
							<img src={GIT} alt="Git" />
							<img src={GITHUBACTIONS} alt="Git" />
							<img src={REACT} alt="React" />
							<img src={NODE} alt="Node.js" />
							<img src={MONGO} alt="MongoDB" />
							<img src={PINECONE} alt="Pinecone" />
						</div>
					</div>
					<div className="company-information">
						<h2 className="year-h2">2024 - Current</h2>
						<div className="company-title">
							<h3>
								<FaRegBuilding />
								General Data
							</h3>
							<h3>
								<FaLaptop />
								Junior Full-Stack Developer
							</h3>
							<h3>
								<FaLocationDot />
								{t("experience.moncton")}
								<img
									className="country-img"
									src="https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg"
									alt="Canada"
								/>
							</h3>
						</div>
						<p className="company-p">
							This is a paragraph This is a paragraph This is a paragraph a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph This is a
							paragraph This is a paragraph This is a paragraph{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
