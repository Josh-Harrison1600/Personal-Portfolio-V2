import "./Projects.css";
import { useTranslation } from "react-i18next";
import CSS from "../assets/css-3.svg";
import GITHUBACTIONS from "../assets/github-actions.svg";
import PYTHON from "../assets/Python.svg";
import REACT from "../assets/react.svg";
import TAILWIND from "../assets/tailwindcss-icon.svg";
import TYPESCRIPT from "../assets/typescript-icon.svg";

export default function Projects() {
	const { t } = useTranslation();

	return (
		<div className="projects-content">
			<div className="projects-header">
				<h2>{t("projects.header")}</h2>
			</div>
			<div className="project-1">
				<div className="kana-typer-desc">
					<h2 className="project-title">{t("projects.kana-typer-title")}</h2>
					<p className="project-description">
						{t("projects.kana-typer-description")}
					</p>
					<div className="stack-used">
						<h2>Stack Used</h2>
						<div className="stack-used-images">
							<img src={REACT} alt="React" />
							<img src={CSS} alt="CSS" />
							<img src={TAILWIND} alt="Tailwind" />
							<img src={TYPESCRIPT} alt="React" />
						</div>
					</div>
				</div>
				<div className="project-video-div">
					<a
						href="https://github.com/Josh-Harrison1600/Kana-Typer"
						target="__blank"
						rel="noopener noreferrer"
					>
						<video className="project-video" muted autoPlay={false} loop>
							<source
								src="https://mayakashi.s3.us-east-2.amazonaws.com/KanaTyper.mp4"
								type="video/mp4"
							/>
						</video>
					</a>
				</div>
			</div>
			<div className="project-2">
				<div className="project-video-div">
					<a
						href="https://github.com/Josh-Harrison1600/Kana-Typer"
						target="__blank"
						rel="noopener noreferrer"
					>
						<video className="project-video" muted autoPlay={false} loop>
							<source
								src="https://mayakashi.s3.us-east-2.amazonaws.com/KanaTyper.mp4"
								type="video/mp4"
							/>
						</video>
					</a>
				</div>
				<div className="kana-typer-desc">
					<h2 className="project-title-bottom">
						{t("projects.japan-job-scraper-title")}
					</h2>
					<p className="project-description">
						{t("projects.japan-job-scraper")}
					</p>
					<div className="stack-used">
						<h2>Stack Used</h2>
						<div className="stack-used-images">
							<img src={PYTHON} alt="Python" />
							<img src={REACT} alt="React" />
							<img src={CSS} alt="CSS" />
							<img src={TYPESCRIPT} alt="TypeScript" />
							<img src={GITHUBACTIONS} alt="GitHub Actions" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
