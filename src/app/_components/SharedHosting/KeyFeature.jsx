import Image from 'next/image'
import React from 'react'
import style from './sharedhosting.module.css'

export default function KeyFeature({ title, text, Features }) {
    return (
        <div className={style.feature__sec__wrapper}>
            <div>
                <h2 className="fade__in">
                    {title}
                </h2>
                <p className="fade__in">
                    {text}
                </p>
            </div>
            <div className={style.cards__wrapper}>
                {Features.map(( feature, index ) => (
                    <div 
                        key={index} 
                        className={`${style.card__wrapper} fade__in`}
                    >
                        <Image 
                            src={feature.img} 
                            alt={feature.title} 
                            title={feature.title} 
                            width={feature.width} 
                            height={feature.height}
                        />
                        <div>
                            <h3>
                                {feature.title}
                            </h3>
                            <p>
                                {feature.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
