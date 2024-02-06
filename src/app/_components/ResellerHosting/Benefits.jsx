import Image from 'next/image'
import React from 'react'
import style from './Reseller.module.css'

export default function Benefits({ title, Cards}) {
    return (
        <div className={style.benefits__sec__wrapper}>
            <div>
                <h2>
                    {title}
                </h2>
            </div>
            <div className={style.cards__wrapper}>
                {Cards.map((card, index) => (
                    <div key={index} className={style.card__wrapper}>
                        <div>
                            <Image 
                                src={card.img} 
                                alt={card.label} 
                                title={card.label} 
                                width={card.width} 
                                height={card.height}
                            />
                        </div>
                        <div>
                            <h3>
                                {card.label}
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
