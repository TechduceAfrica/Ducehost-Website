import Image from 'next/image'
import React from 'react'
import style from './security.module.css'

export default function WhyChooseCard({ Cards, label }) {
    return (
        <div className={style.why__choose__wrapper}>
            <div>
                <h2>
                    {label}
                </h2>
            </div>
            <div className={style.cards__wrapper}>
                {Cards.map((card, index) => (
                    <div key={index} className={style.card__wrapper}>
                        <div>
                            <Image 
                                src={card.img} 
                                alt={card.title} 
                                width={card.width} 
                                height={card.height}
                            />
                        </div>
                        <div>
                            <h3>
                                {card.title}
                            </h3>
                            <p>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
