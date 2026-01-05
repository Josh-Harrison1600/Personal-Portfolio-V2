import "./Landing.css";
import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

export default function Landing({
	onScrollToAbout,
}: {
	onScrollToAbout: () => void;
}) {
	const [introFinished, setIsIntroFinished] = useState(false);
	const { t } = useTranslation();
	const roles = t("landing.role-array", { returnObjects: true });

	return (
		<div className="greeting">
			{/* Hello I'm Josh */}
			<div className="greeting-typewriter">
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString(
								`${t("landing.greeting-one")}<span style='color: red;'>${t("landing.greeting-two")}</span>${t("landing.greeting-three")}`,
							)
							.pauseFor(2500)
							.start()
							.callFunction(() => {
								setIsIntroFinished(true);
							});
					}}
				/>
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
								typewriter;
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
					<button type="button" onClick={onScrollToAbout}>
						Get Started
					</button>
				</motion.div>
			</div>
		</div>
	);
}
