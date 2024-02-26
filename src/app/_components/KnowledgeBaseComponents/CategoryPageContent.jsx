import Link from 'next/link'
import React from 'react'
import style from './knowledgebase.module.css'

export default function CategoryPageContent({ title, articles, category }) {
    return (
        <article>
            <h2 className="fade__in">
                <Link href={"/help/knowledge-base/"}>Knowledge Base</Link> / {title}
            </h2>
            <div className={style.sub__category__screen}>
                {articles.map((article) => (
                    <Link 
                        key={article.id} 
                        href="/help/knowledge-base/[category]/[article]" 
                        as={`/help/knowledge-base/${category.slug}/${article.link}`} 
                        target='_blank'
                        className="fade__in"
                    >
                        <div className={style.sub__category__card}>
                            {article.topic}
                        </div>
                        <span>
                            1 article
                        </span>
                    </Link>
                )
                )}
            </div>
        </article>
    )
}
