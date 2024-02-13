'use client'
import { useEffect } from 'react';
import AsideContent from "@/app/_components/KnowledgeBaseComponents/AsideContent";
import HeroSection from "@/app/_components/KnowledgeBaseComponents/HeroSection";
import MainContents from "@/app/_components/KnowledgeBaseComponents/MainContents";
import style from './knowledgebasepage.module.css'

export default function KnowledgeBase() {

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
                <MainContents/>
                <AsideContent/>
            </section>
        </div>
    )
}
