import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

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
			title="Choose Language"
			zIndex={10000}
			withinPortal={false}
			centered
		>
			<button
				type="button"
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
				onClick={() => {
					changeLanguage("jp");
					languagePicked();
					localStorage.setItem("language", "jp");
					close();
				}}
			>
				日本語
			</button>
		</Modal>
	);
}
