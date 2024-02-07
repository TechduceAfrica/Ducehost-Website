import React from 'react'
import FeatureCards from './FeatureCards'
import { featuresCopy } from '@/copyContents/WordPressHostingCopy'
import style from './wordpresshosting.module.css'

export default function FeatureSection() {
    
    return (
        <div className={style.feature__section}>
            <h2 dangerouslySetInnerHTML={{ __html: featuresCopy.title }}></h2>
            <FeatureCards 
                Features={featuresCopy.cards}
            />
        </div>
    )
}
