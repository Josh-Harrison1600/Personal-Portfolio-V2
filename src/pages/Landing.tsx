import "./Landing.css";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

export default function Landing({
	onScrollToAbout,
	isReady,
}: {
	onScrollToAbout: () => void;
	isReady: boolean;
}) {
	const [introFinished, setIsIntroFinished] = useState(false);
	const [unlockScroll, setUnlockScroll] = useState(false);
	const { t } = useTranslation();
	const roles = t("landing.role-array", { returnObjects: true });

	//Lock scrolling until the intro is done
	useEffect(() => {
		if (!unlockScroll) {
			document.documentElement.classList.add("scroll-lock");
			document.body.classList.add("scroll-lock");
		} else {
			document.documentElement.classList.remove("scroll-lock");
			document.body.classList.remove("scroll-lock");
		}
	}, [unlockScroll]);

	return (
		<div className="greeting">
			{/* Hello I'm Josh */}
			<div className="greeting-typewriter">
				{isReady && (
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(
									`${t("landing.greeting-one")}<span style='color: #00ffff;'>${t("landing.greeting-two")}</span>${t("landing.greeting-three")}`,
								)
								.pauseFor(2500)
								.start()
								.callFunction(() => {
									setIsIntroFinished(true);
								});
						}}
					/>
				)}
			</div>

			<div className="role-array">
				{/* I'm a */}
				<div className="role-state">
					{introFinished && (
						<Typewriter
							options={{
								loop: true,
							}}
							onInit={(typewriter) => {
								typewriter.callFunction(() => {
									setUnlockScroll(true);
								});
								if (Array.isArray(roles)) {
									roles.forEach((role) => {
										typewriter.typeString(role).pauseFor(150).deleteAll();
									});
								}

								typewriter.start();
							}}
						/>
					)}
				</div>
			</div>
			<div className="get-started">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.4,
						delay: 9.2,
						scale: {
							type: "spring",
							visualDuration: 0.3,
							bounce: 0.6,
							delay: 9.2,
						},
					}}
				>
					<button
						type="button"
						onClick={onScrollToAbout}
						className="get-started-btn"
					>
						Get Started ↓
					</button>
				</motion.div>
			</div>
		</div>
	);
}
