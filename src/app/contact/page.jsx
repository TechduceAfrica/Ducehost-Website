import ContactPageCards from "../_components/ContactPage/ContactPageCards";
import { contactPageCopy } from "@/copyContents/ContactPageCopy";
import style from "./contact.module.css"

export default function Contact() {
    return (
        <main className={`${style.contact__page} container__width`}>
            <h1>
                {contactPageCopy.title}
            </h1>
            <ContactPageCards/>
        </main>
    )
}