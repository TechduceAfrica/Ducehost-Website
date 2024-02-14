'use client'
import { useEffect } from 'react';
import ContactPageCards from "../_components/ContactPage/ContactPageCards";
import { contactPageCopy } from "@/copyContents/ContactPageCopy";
import style from "./contact.module.css"

export default function Contact() {

    useEffect( () => {
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    return (
        <main className={`${style.contact__page} container__width`}>
            <h1>
                {contactPageCopy.title}
            </h1>
            <ContactPageCards/>
        </main>
    )
}