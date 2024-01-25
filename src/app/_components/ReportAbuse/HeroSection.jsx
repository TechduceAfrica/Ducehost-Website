import { heroDataCopy } from '@/copyContents/ReportAbuseCopy'
import Image from 'next/image'
import React from 'react'
import style from './ReportAbuse.module.css'

export default function HeroSection() {
    return (
        <section className={`${style.hero__section} container__width`}>
            <div>
                <div>
                    <h1 dangerouslySetInnerHTML={{ __html: heroDataCopy.title }}></h1>
                    <p>
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
                    />
                </div>
            </div>
            <div>
                <p>
                    {heroDataCopy.formDesc}
                </p>
            </div>
        </section>
    )
}
