'use client'
import { useEffect } from 'react';
import { KnowledgeBaseCategories } from "@/copyContents/KnowledgeBaseCopy";
import HeroSection from '@/app/_components/KnowledgeBaseComponents/HeroSection';
import AsideContent from "@/app/_components/KnowledgeBaseComponents/AsideContent";
import style from '@/app/help/knowledge-base/knowledgebasepage.module.css'
import ArticlePageContent from "@/app/_components/KnowledgeBaseComponents/ArticlePageContent";
import { redirect } from "next/navigation";
import { FadeIn, FadeInContainer } from '@/app/_components/EntranceAnimation';

export default function Article({ params }) {

    const { category, article } = params;

    const categoryData = KnowledgeBaseCategories.find(
        (categoryData) => categoryData.slug === category
    );

    if (!categoryData) {
        redirect ("/help/knowledge-base");
    }

    const articleData = categoryData.articles.find(
        (articleData) => articleData.link === article
    );

    if (!articleData) {
        redirect ("/not-found");
    }

    useEffect( () => {
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    return (
        <div>
            <FadeInContainer>
                <FadeIn>
                    <HeroSection/>
                    <section className={`${style.kb__page} container__width margin__block__80`}>
                        <ArticlePageContent 
                            slug={categoryData.slug} 
                            title={categoryData.title} 
                            topic={articleData.topic} 
                            body={articleData.body} 
                            likes={articleData.likes} 
                            dislikes={articleData.dislikes}
                            lastUpdated={articleData.lastUpdated}
                        />
                        <AsideContent/>
                    </section>
                </FadeIn>
            </FadeInContainer>
        </div>
    )
}
