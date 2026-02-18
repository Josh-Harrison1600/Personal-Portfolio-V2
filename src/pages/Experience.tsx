import "./Experience.css";
import { motion, type Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaLaptop, FaRegBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface ExperienceCardProps {
	title: string;
}

function ExperienceCard({ title }: ExperienceCardProps) {
	return (
		<div className="experience-card">
			<p className="experience-tool-name">{title}</p>
		</div>
	);
}

export default function Experience() {
	const { t } = useTranslation();

	const draw: Variants = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: {
					type: "spring",
					duration: 2.5,
					bounce: 0,
				},
				opacity: { duration: 0.01 },
			},
		},
	};

	return (
		<div className="experience-div">
			<div className="experience-header">
				<h2>{t("experience.header")}</h2>
			</div>
			<div className="experience-content">
				{/* General Data */}
				<div className="general-data">
					<div style={{ position: "relative" }}>
						{/** biome-ignore lint/a11y/noSvgWithoutTitle: <suppress> */}
						<svg
							className="exp-border"
							width="100%"
							height="100%"
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								pointerEvents: "none",
								overflow: "visible",
							}}
						>
							<motion.rect
								width="100%"
								height="100%"
								rx="32"
								stroke="#3f61b1"
								strokeWidth="2"
								fill="transparent"
								variants={draw}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							/>
						</svg>
						<a
							className="company-redirect"
							href="https://generaldata.ca/"
							target="__blank"
							rel="noopener"
						>
							<div className="company-information">
								<h2 className="year-h2">2024 - Current</h2>
								<div className="company-title">
									<h3>
										<FaRegBuilding />
										General Data
									</h3>
									<h3>
										<FaLaptop />
										{t("experience.junior-full-stack")}
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
								<p className="company-p">{t("experience.general-data")}</p>
								<div className="skill-list">
									<ExperienceCard title="React" />
									<ExperienceCard title="CSS" />
									<ExperienceCard title="Tailwind" />
									<ExperienceCard title="Git" />
									<ExperienceCard title="Nodejs" />
									<ExperienceCard title="Github Actions" />
									<ExperienceCard title="Azure" />
									<ExperienceCard title="MongoDB" />
									<ExperienceCard title="Vite" />
								</div>
							</div>
						</a>
					</div>
				</div>

				{/* HENNGE */}
				<div className="hennge">
					<div style={{ position: "relative" }}>
						{/** biome-ignore lint/a11y/noSvgWithoutTitle: <suppress> */}
						<svg
							className="exp-border"
							width="100%"
							height="100%"
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								pointerEvents: "none",
								overflow: "visible",
							}}
						>
							<motion.rect
								width="100%"
								height="100%"
								rx="32"
								stroke="#3f61b1"
								strokeWidth="2"
								fill="transparent"
								variants={draw}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							/>
						</svg>
						<a
							className="company-redirect"
							href="https://hennge.com/global/"
							target="__blank"
							rel="noopener"
						>
							<div className="company-information">
								<h2 className="year-h2">2025</h2>
								<div className="company-title">
									<h3>
										<FaRegBuilding />
										HENNGE
									</h3>
									<h3>
										<FaLaptop />
										{t("experience.front-end-intern")}
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
								<div className="skill-list">
									<ExperienceCard title="React" />
									<ExperienceCard title="TypeScript" />
									<ExperienceCard title="CSS" />
									<ExperienceCard title="Git" />
									<ExperienceCard title="GitHub Actions" />
									<ExperienceCard title="AWS" />
									<ExperienceCard title="React Query" />
									<ExperienceCard title="Terraform" />
									<ExperienceCard title="S3" />
									<ExperienceCard title="Route53" />
									<ExperienceCard title="CloudFront" />
									<ExperienceCard title="Vite" />
									<ExperienceCard title="Vitest" />
									<ExperienceCard title="OAuth" />
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
