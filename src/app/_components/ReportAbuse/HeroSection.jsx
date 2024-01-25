import { heroCopy } from '@/copyContents/ReportAbuseCopy'
import Image from 'next/image'
import React from 'react'
import style from './ReportAbuse.module.css'

export default function HeroSection() {
    return (
        <section className={`${style.hero__section} container__width`}>
            <div>
                <div>
                    <h1 dangerouslySetInnerHTML={{ __html: heroCopy.title }}></h1>
                    <p>
                        {heroCopy.body}
                    </p>
                </div>
                <div>
                    <Image 
                        src={heroCopy.img} 
                        alt={heroCopy.alt} 
                        title={heroCopy.alt} 
                        width={heroCopy.width} 
                        height={heroCopy.height}
                    />
                </div>
            </div>
            <div>
                <p>
                    {heroCopy.formDesc}
                </p>
            </div>
        </section>
    )
}
