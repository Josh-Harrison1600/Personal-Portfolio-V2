import "./App.css";
import { useRef } from "react";
import ChooseLanguage from "./components/ChooseLanguage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";

function App() {
	const aboutRef = useRef<HTMLElement>(null);
	const experienceRef = useRef<HTMLElement>(null);
	const projectsRef = useRef<HTMLElement>(null);
	const contactRef = useRef<HTMLElement>(null);

	//handle the scrolling to sections
	const handleScrollingToSection = (
		elementRef: React.RefObject<HTMLElement | null>,
	) => {
		elementRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<Navbar
				onScrollToAbout={() => handleScrollingToSection(aboutRef)}
				onScrollToExperience={() => handleScrollingToSection(experienceRef)}
				onScrollToProjects={() => handleScrollingToSection(projectsRef)}
				onScrollToContact={() => handleScrollingToSection(contactRef)}
			/>
			<ChooseLanguage />

			<section className="landing-section">
				<Landing onScrollToAbout={() => handleScrollingToSection(aboutRef)} />
			</section>

			<section ref={aboutRef} className="about-section">
				<About />
			</section>

			<section ref={experienceRef} className="experience-section">
				<Experience />
			</section>

			<section ref={projectsRef} className="project-section">
				<Projects />
			</section>

			<section ref={contactRef} className="contact-section">
				<Contact />
			</section>
		</>
	);
}

export default App;
