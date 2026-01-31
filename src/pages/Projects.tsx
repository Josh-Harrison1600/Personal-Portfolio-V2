import "./Projects.css";
import { useTranslation } from "react-i18next";
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

	return (
		<div className="projects-content">
			<div className="projects-header">
				<h2>{t("projects.header")}</h2>
			</div>
			<div className="project-1">
				<div className="project-title-and-description">
					<h2 className="project-title">{t("projects.kana-typer-title")}</h2>
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
				<div className="project-img-div">
					<a
						href="https://github.com/Josh-Harrison1600/Kana-Typer"
						target="__blank"
						rel="noopener noreferrer"
					>
						<img src={KANATYPER} className="project-img" alt="Kana Typer" />
					</a>
				</div>
			</div>
			<div className="project-2">
				<div className="project-img-div">
					<a
						href="https://github.com/Josh-Harrison1600/Japan-Job-Scraper"
						target="__blank"
						rel="noopener noreferrer"
					>
						<img
							src={SCRAPER}
							className="project-img"
							alt="Japan Job Scraper"
						/>
					</a>
				</div>
				<div className="project-title-and-description">
					<h2 className="project-title">
						{t("projects.japan-job-scraper-title")}
					</h2>
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
			</div>
		</div>
	);
}
