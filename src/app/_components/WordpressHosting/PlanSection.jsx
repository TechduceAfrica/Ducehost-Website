import React from 'react'
import PlansCards from './PlansCards'
import { WordPressHostingPlans } from '@/copyContents/WordPressHostingCopy'
import style from './wordpresshosting.module.css'

export default function PlanSection() {
    return (
        <div>
            <div className={style.plan__section__title}>
                <span>
                    {WordPressHostingPlans.subTitle}
                </span>
                <h2 dangerouslySetInnerHTML={{ __html: WordPressHostingPlans.title }}></h2>
            </div>
            <PlansCards Plans={WordPressHostingPlans.cards}/>
        </div>
    )
}
