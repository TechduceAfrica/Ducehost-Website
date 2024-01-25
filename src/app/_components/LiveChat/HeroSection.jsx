import React from 'react'
import PriBtn from '../PriBtn'
import Image from 'next/image'
import { LiveChatCopy } from '@/copyContents/LiveChatCopy'
import style from './livechat.module.css'

export default function HeroSection() {
    return (
        <section className={style.hero__section}>
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: LiveChatCopy.title }}></h1>
                <p>
                    {LiveChatCopy.desc} 
                </p>
                <PriBtn PriBtnLink={LiveChatCopy.link} PriBtnText={LiveChatCopy.btn}/>
            </div>
            <div>
                <Image 
                    src={LiveChatCopy.img} 
                    alt={LiveChatCopy.title} 
                    title={LiveChatCopy.title} 
                    width={LiveChatCopy.width} 
                    height={LiveChatCopy.height}
                />
            </div>
        </section>
    )
}
