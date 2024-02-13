import React from 'react'
import style from './knowledgebase.module.css'
import Image from 'next/image'
import { KnowledgeBaseMostRead } from '@/copyContents/KnowledgeBaseCopy'
import Link from 'next/link'

export default function AsideContent() {

    const ariticleIcon = {
        src: `/images/ducehost-article-icon.webp`,
        alt: `Ducehost Knowledgebase Icon`,
        title: `Ducehost Knowledgebase Icon`,
        width: `26`,
        height: `26`
    }

    return (
        <aside>
            <h2>
                Most Read Articles
            </h2>
            <div>
                {KnowledgeBaseMostRead.map((MostRead, index) => (
                    <div key={index} className={style.widgets__list}>
                        <Image {...ariticleIcon}/>
                        <p>
                            <Link href={MostRead.link} target='__blank' title={MostRead.title}>
                                {MostRead.title}    
                            </Link>
                        </p>
                    </div>
                )
                )}
            </div>
        </aside>
    )
}
