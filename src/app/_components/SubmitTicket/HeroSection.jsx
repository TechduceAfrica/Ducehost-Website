import React from 'react'
import Image from 'next/image'
import style from '../ReportAbuse/ReportAbuse.module.css'
import { heroDataCopy } from '@/copyContents/SubmitTicketCopy'

export default function HeroSection() {
    return (
        <section className={`${style.hero__section} container__width`}>
            <div>
                <div>
                    <h1 dangerouslySetInnerHTML={{ __html: heroDataCopy.title }} className="fade__in"></h1>
                    <p className="fade__in">
                        {heroDataCopy.body}
                    </p>
                </div>
                <div>
                    <Image 
                        src={heroDataCopy.img} 
                        alt={heroDataCopy.alt} 
                        title={heroDataCopy.alt} 
                        width={heroDataCopy.width} 
                        height={heroDataCopy.height}
                        className="fade__in"
                    />
                </div>
            </div>
            <div>
                <p className="fade__in">
                    {heroDataCopy.formDesc}
                </p>
            </div>
        </section>
    )
}
