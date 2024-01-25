import Image from "next/image";
import PriBtn from "../PriBtn";
import style from "./contactpage.module.css"

export default function ContactPageCard({ contactPageCards }) {
    return (
        <div className={style.cards__wrapper}>
            {contactPageCards.map((contactCard, index) => (
                <div key={index} className={style.card}>
                    <Image 
                        src={contactCard.img} 
                        alt={contactCard.title} 
                        title={contactCard.title} 
                        width={contactCard.width} 
                        height={contactCard.height}
                    />
                    <h3>
                        {contactCard.title}
                    </h3>
                    <p>
                        {contactCard.desc}
                    </p>
                    <PriBtn 
                        PriBtnText={contactCard.btnText} 
                        PriBtnLink={contactCard.link} 
                    />
                </div>
            )
            )}
        </div>
    )
}
