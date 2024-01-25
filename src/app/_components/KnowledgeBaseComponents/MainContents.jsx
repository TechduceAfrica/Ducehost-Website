import React from 'react'
import style from './knowledgebase.module.css'
import { KnowledgeBaseCategories } from '@/copyContents/KnowledgeBaseCopy'
import Link from 'next/link'

export default function MainContents() {
    return (
        <article>
            <h2>
                Knowledge Base
            </h2>
            <div className={style.category__screen}>
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
