import { CtaSectionCopy } from '@/copyContents/ReportAbuseCopy'
import Image from 'next/image'
import style from './ReportAbuse.module.css'
import ContactCards from './ContactCards'

export default function CtaSection({ contactCardProps }) {
    return (
        <section className={`${style.cta__section} container__width`}>
            <div>
                <div>
                    <h3>
                        {CtaSectionCopy.title}
                    </h3>
                    <p>
                        {CtaSectionCopy.desc}
                    </p>
                </div>
                <ContactCards contactCards={contactCardProps}/>
            </div>
            <Image 
                src={CtaSectionCopy.img} 
                alt={CtaSectionCopy.alt} 
                title={CtaSectionCopy.alt} 
                width={CtaSectionCopy.width} 
                height={CtaSectionCopy.height}
            />
        </section>
    )
}
