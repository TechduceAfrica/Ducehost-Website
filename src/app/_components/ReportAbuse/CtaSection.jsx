import { CtaSectionCopy } from '@/copyContents/ReportAbuseCopy'
import Image from 'next/image'
import style from './ReportAbuse.module.css'
import ContactCards from './ContactCards'

export default function CtaSection({ contactCardProps, title }) {
    return (
        <section className={`${style.cta__section} container__width`}>
            <div>
                <div>
                    <h3 className="fade__in">
                        {title}
                    </h3>
                    <p className="fade__in">
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
                className="fade__in"
            />
        </section>
    )
}
