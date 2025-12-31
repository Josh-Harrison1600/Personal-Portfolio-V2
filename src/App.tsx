import "./App.css";
import { useRef } from "react";
import ChooseLanguage from "./components/ChooseLanguage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";

function App() {
	const aboutRef = useRef<HTMLElement>(null);
	const experienceRef = useRef<HTMLElement>(null);

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
		</>
	);
}

export default App;
