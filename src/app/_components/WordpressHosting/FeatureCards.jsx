import Image from 'next/image'
import React from 'react'
import style from './wordpresshosting.module.css'

export default function FeatureCards({Features}) {
    return (
        <div className={style.feature__cards__wrapper}>
            {Features.map(( feature, index ) => (
                <div 
                    key={index} 
                    className={`${style.feature__card__wrapper} border__1 fade__in`}
                >
                    <Image 
                        src={feature.img} 
                        alt={feature.title} 
                        title={feature.title} 
                        width={feature.width} 
                        height={feature.width}
                    />
                    <div>
                        <h3>
                            {feature.title} 
                        </h3>
                        <p>
                            {feature.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
