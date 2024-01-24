import { CTAsectionCardCopy, CtaSectionCopy } from '@/copyContents/ReportAbuseCopy'
import Image from 'next/image'
import React from 'react'
import WcuListCard from '../WcdSection/WcuListCard'
import style from './ReportAbuse.module.css'

export default function CtaSection() {
    return (
        <section className={`${style.cta__section} container__width`}>
            <WcuListCard wcuListCards={CTAsectionCardCopy}/>
            <Image 
                src={CtaSectionCopy.img} 
                alt={CtaSectionCopy.alt} 
                title={CtaSectionCopy.alt} 
                width={CtaSectionCopy.width} 
                height={CtaSectionCopy.height}
            />
        </section>
    )
}
