import "./Projects.css";
import { useTranslation } from "react-i18next";
import AWS from "../assets/aws.svg";
import UnderConstruction from "../assets/buillding.png";
import CSS from "../assets/css-3.svg";
import GITHUBACTIONS from "../assets/github-actions.svg";
import NODE from "../assets/nodejs-icon.svg";
import POSTGRES from "../assets/postgresql.svg";
import REACT from "../assets/react.svg";
import RQUERY from "../assets/react-query-icon.svg";
import TAILWIND from "../assets/tailwindcss-icon.svg";
import TERRAFORM from "../assets/terraform-icon.svg";
import TYPESCRIPT from "../assets/typescript-icon.svg";

export default function Projects() {
	const { t } = useTranslation();

	return (
		<div className="projects-content">
			<div className="project-1">
				<div className="kana-typer-desc">
					<h2>Kana Typer</h2>
					<p>{t("projects.kana-typer-description")}</p>
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
					<img src={UnderConstruction} alt="Under Construction" />
				</div>
				<div className="kana-typer-desc">
					<h2>Coming Soon...</h2>
					<p>{t("projects.coming-soon-description")}</p>
					<div className="stack-used">
						<h2>Stack Being Used</h2>
						<div className="stack-used-images">
							<img src={REACT} alt="React" />
							<img src={CSS} alt="CSS" />
							<img src={TYPESCRIPT} alt="TypeScript" />
							<img src={GITHUBACTIONS} alt="GitHub Actions" />
							<img src={POSTGRES} alt="PostgreSQL" />
							<img src={NODE} alt="Nodejs" />
							<img src={RQUERY} alt="React Query" />
							<img src={TERRAFORM} alt="Terraform" />
							<img src={AWS} alt="AWS" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
