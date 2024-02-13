import React from 'react'
import style from './knowledgebase.module.css'
import { KnowledgeBaseCategories } from '@/copyContents/KnowledgeBaseCopy'
import Link from 'next/link'

export default function MainContents() {
    return (
        <article>
            <h2 
                data-scroll 
                data-scroll-speed="0.15"
            >
                Knowledge Base
            </h2>
            <div 
                className={style.category__screen} 
                data-scroll 
                data-scroll-speed="0.12"
            >
                {KnowledgeBaseCategories.map((Category) => (
                    <Link 
                        key={Category.id} 
                        href="/help/knowledge-base/[category]" 
                        as={`/help/knowledge-base/${Category.slug}`} 
                        target='_blank'
                    >
                        <div className={style.category__card}>
                            {Category.title}
                        </div>
                    </Link>
                )
                )}
            </div>
        </article>
    )
}
