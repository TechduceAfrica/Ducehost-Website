import Image from 'next/image'
import React from 'react'
import style from './Reseller.module.css'

export default function Steps({ title, stepOne, stepTwo, stepThree }) {
    return (
        <>
            <div className={style.step__wrapper}>
                <div className={style.step__sec__title}>
                    <h2>
                        {title}
                    </h2>
                </div>
                <div className={style.step__one}>
                    <div>
                        <Image 
                            src={stepOne.img} 
                            alt={stepOne.label} 
                            title={stepOne.label} 
                            width={stepOne.width} 
                            height={stepOne.height}
                        />
                    </div>
                    <div>
                        <span className='wine'>
                            {stepOne.step}
                        </span>
                        <h3>
                            {stepOne.label}
                        </h3>
                        <p>
                            {stepOne.desc}
                        </p>
                    </div>
                </div>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="573" 
                    height="236" 
                    viewBox="0 0 573 236" 
                    fill="none"
                >
                    <path d="M573 0C573 0 493.517 92.1792 419.469 118C297.49 160.534 196.054 -10.6748 90.4737 57.7959C20.6837 103.056 0 236 0 236" stroke="black" stroke-dasharray="18 18"/>
                </svg>
                <div className={style.step__two}>
                    <div>
                        <Image 
                            src={stepTwo.img} 
                            alt={stepTwo.label} 
                            title={stepTwo.label} 
                            width={stepTwo.width} 
                            height={stepTwo.height}
                        />
                    </div>
                    <div>
                        <span  className='wine'>
                            {stepTwo.step}
                        </span>
                        <h3>
                            {stepTwo.label}
                        </h3>
                        <p>
                            {stepTwo.desc}
                        </p>
                    </div>
                </div>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="385" 
                    height="265" 
                    viewBox="0 0 385 265" 
                    fill="none"
                >
                    <path d="M2.47602 0C2.47602 0 -15.4132 150.406 44.9787 181.574C97.9813 208.929 129.591 130.737 188.146 132.5C278.308 135.214 385 265 385 265" stroke="black" stroke-dasharray="18 18"/>
                </svg>
                <div className={style.step__three}>
                    <div>
                        <Image 
                            src={stepThree.img} 
                            alt={stepThree.label} 
                            title={stepThree.label} 
                            width={stepThree.width} 
                            height={stepThree.height}
                        />
                    </div>
                    <div>
                        <span className='wine'>
                            {stepThree.step}
                        </span>
                        <h3>
                            {stepThree.label}
                        </h3>
                        <p>
                            {stepThree.desc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
