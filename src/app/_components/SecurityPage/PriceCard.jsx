import React from 'react'
import style from './security.module.css'
import PriBtn from '../PriBtn'
import SecBtn from '../SecBtn'

export default function PriceCard({ PlanLabel, PriceCardContent }) {
    return (
        <>
            <div className={style.plan__title}>
                <h2>
                    {PlanLabel.title}
                </h2>
                <p>
                    {PlanLabel.desc}
                </p>
            </div>
            <div className={style.price__cards__wrapper}>
                {PriceCardContent.map((priceCard, index) => (
                    <div key={index} className={`${style.price__card__wrapper} border__1`}>
                        <div className={style.price__card__label}>
                            <span>
                                {priceCard.label}
                            </span>
                        </div>
                        <div className={style.price__card__main}>
                            <h3 className='green'>
                                {priceCard.title}
                            </h3>
                            <div className={style.price__card__price}>
                                <div>
                                    <h4 className='wine'>
                                        {priceCard.priceOne}
                                    </h4>
                                    <span>
                                        {priceCard.priceOneLabel}
                                    </span>
                                </div>
                                <div>
                                    <h4 className='wine'>
                                        {priceCard.priceTwo}
                                    </h4>
                                    <span>
                                        {priceCard.priceTwoLabel}
                                    </span>
                                </div>
                            </div>
                            <div className={style.divider}></div>
                            <div>
                                <h5>
                                    {priceCard.mainFeature}
                                </h5>
                                <ul>
                                    {priceCard.Features.map((feature, index) => (
                                        <li key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 6.99984L9 18.9998L3.5 13.4998L4.91 12.0898L9 16.1698L19.59 5.58984L21 6.99984Z" fill="#23A455"/>
                                            </svg>
                                            {feature.list}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={style.divider}></div>
                        </div>
                        <div className={style.price__card__btn}>
                            <PriBtn 
                                PriBtnLink={priceCard.link} 
                                PriBtnText={priceCard.linkText}
                            />
                            <SecBtn SecBtnLink={priceCard.SecBtnLink} SecBtnText={priceCard.SecBtnText} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
