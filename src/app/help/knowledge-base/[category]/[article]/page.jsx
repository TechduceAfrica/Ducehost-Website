import { KnowledgeBaseCategories } from "@/copyContents/KnowledgeBaseCopy";
import HeroSection from '@/app/_components/KnowledgeBaseComponents/HeroSection';
import AsideContent from "@/app/_components/KnowledgeBaseComponents/AsideContent";
import style from '@/app/help/knowledge-base/knowledgebasepage.module.css'
import ArticlePageContent from "@/app/_components/KnowledgeBaseComponents/ArticlePageContent";

export default function Article({ params }) {

    const { category, article } = params;

    const categoryData = KnowledgeBaseCategories.find(
        (categoryData) => categoryData.slug === category
    );

    if (!categoryData) {
        return <div>Category not found</div>;
    }

    const articleData = categoryData.articles.find(
        (articleData) => articleData.link === article
    );

    if (!articleData) {
        return <div>Article not found</div>;
    }

    return (
        <div>
            <HeroSection/>
            <section className={`${style.kb__page} container__width`}>
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
        </div>
    )
}
