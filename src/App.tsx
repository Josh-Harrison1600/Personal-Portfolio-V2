import "./App.css";
import { useEffect, useRef, useState } from "react";
import ChooseLanguage from "./components/ChooseLanguage";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";

function App() {
	const landingRef = useRef<HTMLElement>(null);
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

	const [activeSection, setActiveSection] = useState("");
	const [hasPickedLanguage, setHasPickedLanugage] = useState(
		!!localStorage.getItem("language"),
	);

	//Handle the effect for changing navbar color when on the component
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.3,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions,
		);

		const sections = ["landing", "about", "experience", "projects", "contact"];
		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Header
				activeSection={activeSection}
				onScrollToLanding={() => handleScrollingToSection(landingRef)}
				onScrollToAbout={() => handleScrollingToSection(aboutRef)}
				onScrollToExperience={() => handleScrollingToSection(experienceRef)}
				onScrollToProjects={() => handleScrollingToSection(projectsRef)}
				onScrollToContact={() => handleScrollingToSection(contactRef)}
			/>
			{!hasPickedLanguage ? (
				<ChooseLanguage languagePicked={() => setHasPickedLanugage(true)} />
			) : (
				<>
					<section id="landing" ref={landingRef} className="landing-section">
						<Landing
							onScrollToAbout={() => handleScrollingToSection(aboutRef)}
						/>
					</section>

					<section id="about" ref={aboutRef} className="about-section">
						<About />
					</section>

					<section
						id="experience"
						ref={experienceRef}
						className="experience-section"
					>
						<Experience />
					</section>

					<section id="projects" ref={projectsRef} className="project-section">
						<Projects />
					</section>

					<section id="contact" ref={contactRef} className="contact-section">
						<Contact />
					</section>
				</>
			)}
		</>
	);
}

export default App;
