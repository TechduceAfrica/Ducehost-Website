import React from 'react'
import style from './domaintransferguide.module.css';
import Image from 'next/image';

export default function StepTwo({ step, title, imgLink, width, height }) {
    return (
        <>
            <div className={style.step__img__wrapper}>
                <Image
                    src={imgLink}
                    alt={title}
                    title={title}
                    width={width}
                    height={height}
                />
            </div>
            <div className={style.step__copy__wrapper}>
                <span className={`${style.step__number} wine`}>
                    {step}
                </span>
                <h4>
                    {title}
                </h4>
                <ul>
                    <li>
                        Request the domain name’s authorization code (also known as the 
                        <a href='https://ducehost.com/host/cart.php?a=add&domain=transfer' target='_blank' title='EPP Code Link' className='wine'> EPP code </a> 
                        or transfer code) from your current registrar.
                    </li>
                </ul>

            </div>
        </>
    )
}
