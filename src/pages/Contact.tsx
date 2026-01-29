import "./Contact.css";
import emailjs from "@emailjs/browser";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

type ContactFormData = {
	name: string;
	email: string;
	message: string;
};

export default function Contact() {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>();

	const sendEmail: SubmitHandler<ContactFormData> = async (
		data: ContactFormData,
	) => {
		try {
			await emailjs.send(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				data,
				import.meta.env.VITE_PUBLIC_KEY,
			);
			toast.success("Email Sent!");
			reset();
		} catch (error) {
			toast.error("Something Went Wrong!");
			console.error("FAILED...", error);
		}
	};

	return (
		<div className="contact-div">
			<div className="contact-title">
				<h2>{t("contact.title")}</h2>
			</div>
			<div className="contact-methods">
				<div className="email-form">
					<h2>Feel Free to Reach Out!</h2>
					<form onSubmit={handleSubmit(sendEmail)}>
						<input placeholder="Enter Your Name" {...register("name")} />
						<input placeholder="Enter Your Email" {...register("email")} />
						<textarea
							placeholder="Enter Your Message"
							{...register("message")}
						/>
						<button type="submit" className="submit-message-btn">
							<MdOutlineEmail className="email-icon" />
							Send Message
						</button>
					</form>
					<div className="socials"></div>
				</div>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				style={{ zIndex: 999999 }}
				toastClassName="custom-toast"
				
			/>
		</div>
	);
}
