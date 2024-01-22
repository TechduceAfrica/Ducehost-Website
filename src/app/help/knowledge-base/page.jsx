import AsideContent from "@/app/_components/KnowledgeBaseComponents/AsideContent";
import HeroSection from "@/app/_components/KnowledgeBaseComponents/HeroSection";
import MainContents from "@/app/_components/KnowledgeBaseComponents/MainContents";
import style from './knowledgebasepage.module.css'

export default function KnowledgeBase() {
    return (
        <div>
            <HeroSection/>
            <section className={`${style.kb__page} container__width`}>
                <MainContents/>
                <AsideContent/>
            </section>
        </div>
    )
}
