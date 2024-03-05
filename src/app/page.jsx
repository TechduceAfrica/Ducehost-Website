'use client'
import { useEffect } from 'react';
import { FadeIn, FadeInContainer } from './_components/EntranceAnimation';
import ImgBGHeroSection from '@/app/_components/ImgBGHeroSection';
import RightLeftLayout from '@/app/_components/RightLeftLayout';
import HostingPriceCard from '@/app/_components/HostingPriceCard';
import FAQs from '@/app/_components/FAQs';
import Testimonial from '@/app/_components/Testimonial';
import ExpertCTA from './_components/ExpertCTA';
import { Hosting } from '@/copyContents/PricePlan';
import { FAQsCopy, homeCopy } from '@/copyContents/HomePage';
import style from './page.module.css'

export default function Home() {

    useEffect( () => {
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    return (
        <main>
            <ImgBGHeroSection
                HeroSecBgImgLink={homeCopy.heroBG}
                text={homeCopy.heroIntro}
                title={homeCopy.heroTitle}
            />
            <section className='container__width'>
                <FadeInContainer>
                    <FadeIn>
                        <div className={style.home__sec}>
                            <div className={style.content__copy}>
                                <h3 className="fade__in">
                                    {homeCopy.wcuSectionTitle}
                                </h3>
                                <p className="fade__in">
                                    {homeCopy.wcuSectionSubTitle}
                                </p>
                            </div>
                            <RightLeftLayout
                                rlLayout={homeCopy.wcuList}
                            />
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className={style.home__sec}>
                            <div className={style.content__copy}>
                                <h3 className="fade__in">
                                    {homeCopy.ppSectionTitle}
                                </h3>
                                <p className="fade__in">
                                    {homeCopy.ppSectionText}
                                </p>
                            </div>
                            <HostingPriceCard
                                hostingPlans={Hosting.plans}
                            />
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className={style.home__sec}>
                            <div className={`${style.content__copy} ${style.testimonial__sec}`}>
                                <h3 className="fade__in">
                                    {homeCopy.testimonySectionTitle}
                                </h3>
                                <p className="fade__in">
                                    {homeCopy.testimonySectionText}
                                </p>
                            </div>
                            <div className="fade__in">
                                <Testimonial/>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className={style.home__sec}>
                            <FAQs
                                faqsContent={FAQsCopy}
                                />
                        </div>
                    </FadeIn>
                </FadeInContainer>
            </section>
            <FadeInContainer>
                <FadeIn>
                    <ExpertCTA/>
                </FadeIn>
            </FadeInContainer>
        </main>
    )
}
