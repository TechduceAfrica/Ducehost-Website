import React from 'react'
import { KnowledgeBaseCategories } from '@/copyContents/KnowledgeBaseCopy'
import HeroSection from '@/app/_components/KnowledgeBaseComponents/HeroSection';
import AsideContent from "@/app/_components/KnowledgeBaseComponents/AsideContent";
import style from '../knowledgebasepage.module.css'
import CategoryPageContent from '@/app/_components/KnowledgeBaseComponents/CategoryPageContent';

export default function Category({ params }) {

    const category = KnowledgeBaseCategories.find(
        (category) => category.slug === params.category
    );

    if (!category) {
        return <h1>Category not found</h1>;
    }

    return (
        <div>
            <HeroSection/>
            <section className={`${style.kb__page} container__width`}>
                <CategoryPageContent title={category.title} articles={category.articles} category={category}/>
                <AsideContent/>
            </section>
        </div>
    )
}
