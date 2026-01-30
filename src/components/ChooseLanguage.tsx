import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ChooseLanguage.css";

export default function ChooseLanguage({
	languagePicked,
}: {
	languagePicked: () => void;
}) {
	const [opened, { open, close }] = useDisclosure(false);
	const { i18n } = useTranslation();

	//Change language to JP or EN
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		console.log("language chosen:", lng);
	};

	//open modal on page render
	useEffect(() => {
		if (localStorage.getItem("language")) {
			return;
		}
		open();
	}, [open]);

	return (
		<Modal
			opened={opened}
			onClose={close}
			title={<span data-autofocus>Select Your Language</span>}
			zIndex={10000}
			withinPortal={false}
			withCloseButton={false}
			closeOnClickOutside={false}
			centered
			classNames={{
				root: "modal-root-class",
				inner: "modal-inner-class",
				content: "modal-content-class",
				header: "modal-header-class",
				title: "modal-title-class",
				body: "modal-body-class",
				close: "modal-close-class",
			}}
		>
			<div className="language-selection">
				<button
					type="button"
					className="english-btn"
					onClick={() => {
						changeLanguage("en");
						languagePicked();
						localStorage.setItem("language", "en");
						close();
					}}
				>
					English
				</button>
				<button
					type="button"
					className="japanese-btn"
					onClick={() => {
						changeLanguage("jp");
						languagePicked();
						localStorage.setItem("language", "jp");
						close();
					}}
				>
					日本語
				</button>
			</div>
		</Modal>
	);
}
