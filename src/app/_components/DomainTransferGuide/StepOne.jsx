import React from 'react';
import style from './domaintransferguide.module.css';
import Image from 'next/image';

export default function StepOne({ step, title, imgLink, width, height, content, note }) {
    return (
        <>
            <div className={`${style.step__img__wrapper} fade__in`}>
                <Image
                    src={imgLink}
                    alt={title}
                    title={title}
                    width={width}
                    height={height}
                />
            </div>
            <div className={style.step__copy__wrapper}>
                <span className={`${style.step__number} wine fade__in`}>
                    {step}
                </span>
                <h4 className="fade__in">
                    {title}
                </h4>
                <ul>
                    {content.map((item, index) => (
                        <li key={index} className="fade__in">
                            {item.list}
                        </li>
                    )
                    )}
                </ul>
                <div className={style.step__note__wrapper}>
                    <span className="fade__in">
                        <strong>Note</strong>: {note}
                    </span>
                </div>
            </div>
        </>
    )
}
