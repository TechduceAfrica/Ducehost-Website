'use client'
import { useEffect } from 'react';
import React from 'react'
import { KnowledgeBaseCategories } from '@/copyContents/KnowledgeBaseCopy'
import HeroSection from '@/app/_components/KnowledgeBaseComponents/HeroSection';
import AsideContent from "@/app/_components/KnowledgeBaseComponents/AsideContent";
import style from '../knowledgebasepage.module.css'
import CategoryPageContent from '@/app/_components/KnowledgeBaseComponents/CategoryPageContent';
import { redirect } from "next/navigation";

export default function Category({ params }) {

    const category = KnowledgeBaseCategories.find(
        (category) => category.slug === params.category
    );

    if (!category) {
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
            <HeroSection/>
            <section className={`${style.kb__page} container__width margin__block__80`}>
                <CategoryPageContent 
                    title={category.title} 
                    articles={category.articles} 
                    category={category}
                />
                <AsideContent/>
            </section>
        </div>
    )
}
