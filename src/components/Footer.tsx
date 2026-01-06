import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-icons">
				<div className="linkedin">
					<a
						href="https://www.linkedin.com/in/josh-harrison2283/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin className="linkedin-icon" />
					</a>
				</div>
				<div className="github">
					<a
						href="https://github.com/Josh-Harrison1600"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub className="github-icon" />
					</a>
				</div>
			</div>
		</footer>
	);
}
