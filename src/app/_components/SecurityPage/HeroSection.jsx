import React from 'react'
import PriBtn from '../PriBtn'
import Image from 'next/image'
import style from  './security.module.css'

export default function HeroSection({ heroContent }) {

    const {title, body, link, cta, img, width, height} = heroContent;

    return (
        <section className={`${style.hero__wrapper} padding__block__80`}>
            <div className={style.content}>
                <h1>
                    {title}
                </h1>
                <p>
                    {body}
                </p>
                <PriBtn 
                    PriBtnLink={link} 
                    PriBtnText={cta}
                />
            </div>
            <div>
                <Image 
                    src={img} 
                    alt={title} 
                    title={title} 
                    width={width} 
                    height={height}
                />
            </div>
        </section>
    )
}
