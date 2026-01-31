import "./App.css";
import { useEffect, useRef, useState } from "react";
import ChooseLanguage from "./components/ChooseLanguage";
import Footer from "./components/Footer";
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
	const gradientRef = useRef<HTMLDivElement>(null);

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

	//get the mouse for the gradient effect
	useEffect(() => {
		const updateMousePos = (event: MouseEvent) => {
			if (!gradientRef) return;
			if (gradientRef.current === null) return;
			const { clientX, clientY } = event;
			gradientRef.current.style.setProperty("--x", `${clientX}px`);
			gradientRef.current.style.setProperty("--y", `${clientY}px`);
		};
		window.addEventListener("mousemove", updateMousePos);

		return () => {
			window.removeEventListener("mousemove", updateMousePos);
		};
	}, []);

	//bring the user back to the landing on refresh
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header
				isReady={hasPickedLanguage}
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
				<div className="gradient-div" ref={gradientRef}>
					<section id="landing" ref={landingRef} className="landing-section">
						<Landing
							onScrollToAbout={() => handleScrollingToSection(aboutRef)}
							isReady={hasPickedLanguage}
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

					<Footer />
				</div>
			)}
		</>
	);
}

export default App;
