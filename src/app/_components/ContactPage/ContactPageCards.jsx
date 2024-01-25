import { contactPageCopy } from "@/copyContents/ContactPageCopy";
import ContactPageCard from "./ContactPageCard";

export default function ContactPageCards() {
    return (
        <section>
            <ContactPageCard 
                contactPageCards={contactPageCopy.contactPageCards}
            />
        </section>
    )
}
