import "./Projects.css";
import { motion, type Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { GoArrowUpRight } from "react-icons/go";
import SCRAPER from "../assets/japan-job-scraper.png";
import KANATYPER from "../assets/kana-typer.png";

interface ProjectCardProps {
	title: string;
}

function ProjectCard({ title }: ProjectCardProps) {
	return (
		<div className="project-card">
			<p className="project-tool-name">{title}</p>
		</div>
	);
}

export default function Projects() {
	const { t } = useTranslation();

	const bounceInLeft: Variants = {
		hidden: {
			opacity: 0,
			x: -100,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 80,
				damping: 5,
				mass: 0.75,
				velocity: 1,
			},
		},
	};

	const bounceInRight: Variants = {
		hidden: {
			opacity: 0,
			x: 100,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 80,
				damping: 5,
				mass: 0.75,
				velocity: 1,
			},
		},
	};

	return (
		<div className="projects-content">
			<div className="projects-header">
				<h2>{t("projects.header")}</h2>
			</div>
			<div className="project-1">
				<motion.div
					variants={bounceInLeft}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
				>
					<div className="project-title-and-description">
						<a
							href="https://kana-typer-fawn.vercel.app/"
							target="__blank"
							rel="noopener noreferrer"
							className="project-title"
						>
							{t("projects.kana-typer-title")}{" "}
							<GoArrowUpRight className="arrow" size={24} />
						</a>
						<p className="project-description">
							{t("projects.kana-typer-description")}
						</p>
						<div className="stack-used">
							<ProjectCard title="React" />
							<ProjectCard title="CSS" />
							<ProjectCard title="Tailwind" />
							<ProjectCard title="TypeScript" />
						</div>
					</div>
				</motion.div>
				<div className="project-img-div">
					<img src={KANATYPER} className="project-img" alt="Kana Typer" />
				</div>
			</div>
			<div className="project-2">
				<div className="project-img-div">
					<img src={SCRAPER} className="project-img" alt="Japan Job Scraper" />
				</div>
				<motion.div
					variants={bounceInRight}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
				>
					<div className="project-title-and-description">
						<a
							href="https://github.com/Josh-Harrison1600/Japan-Job-Scraper"
							target="__blank"
							rel="noopener noreferrer"
							className="project-title-bottom"
						>
							{t("projects.japan-job-scraper-title")}{" "}
							<GoArrowUpRight className="arrow" size={24} />
						</a>
						<p className="project-description">
							{t("projects.japan-job-scraper")}
						</p>
						<div className="stack-used">
							<ProjectCard title="Python" />
							<ProjectCard title="React" />
							<ProjectCard title="CSS" />
							<ProjectCard title="TypeScript" />
							<ProjectCard title="GitHub Actions" />
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
