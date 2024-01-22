import React from 'react'
import style from './knowledgebase.module.css'
import ArticleSearch from './ArticleSearch'
import Image from 'next/image'
import { KnowledgeBaseCopy } from '@/copyContents/KnowledgeBaseCopy'

export default function HeroSection() {
    return (
        <section className={`${style.hero} container__width`}>
            <div className={style.hero__text}>
                <h1>
                    {KnowledgeBaseCopy.title}
                </h1>
                <ArticleSearch/>
            </div>
            <div>
                <Image 
                    src={KnowledgeBaseCopy.img} 
                    alt={KnowledgeBaseCopy.title} 
                    title={KnowledgeBaseCopy.title} 
                    width={KnowledgeBaseCopy.width} 
                    height={KnowledgeBaseCopy.height}
                />
            </div>
        </section>
    )
}
