'use client'
import ImgBGHeroSection from '@/app/_components/ImgBGHeroSection';
import style from './page.module.css'
import { useEffect } from 'react';
import { FAQsCopy, homeCopy } from '@/copyContents/HomePage';
import RightLeftLayout from '@/app/_components/RightLeftLayout';
import HostingPriceCard from '@/app/_components/HostingPriceCard';
import { Hosting } from '@/copyContents/PricePlan';
import FAQs from '@/app/_components/FAQs';
import Testimonial from '@/app/_components/Testimonial';

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
                <div className={style.home__sec}>
                    <div className={style.content__copy}>
                        <h3>
                            {homeCopy.wcuSectionTitle}
                        </h3>
                        <p>
                            {homeCopy.wcuSectionSubTitle}
                        </p>
                    </div>
                    <RightLeftLayout
                        rlLayout={homeCopy.wcuList}
                    />
                </div>
                <div className={style.home__sec}>
                    <div className={style.content__copy}>
                        <h3>
                            {homeCopy.ppSectionTitle}
                        </h3>
                        <p>
                            {homeCopy.ppSectionText}
                        </p>
                    </div>
                    <HostingPriceCard
                        hostingPlans={Hosting.plans}
                    />
                </div>
                <div className={style.home__sec}>
                    <div className={style.content__copy}>
                        <h3>
                            {homeCopy.testimonySectionTitle}
                        </h3>
                        <p>
                            {homeCopy.testimonySectionText}
                        </p>
                    </div>
                    <div>
                        <Testimonial/>
                    </div>
                </div>
                <div className={style.home__sec}>
                    <FAQs
                        faqsContent={FAQsCopy}
                    />
                </div>
            </section>
        </main>
    )
}
