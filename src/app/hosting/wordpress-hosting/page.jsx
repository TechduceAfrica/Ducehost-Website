'use client'
import ExpertCTA from '@/app/_components/ExpertCTA';
import WithPriBtn from '@/app/_components/ImgBGHeroSection/WithPriBtn';
import FeatureSection from '@/app/_components/WordpressHosting/FeatureSection';
import PlanSection from '@/app/_components/WordpressHosting/PlanSection';
import { featuresCopy, heroSection } from '@/copyContents/WordPressHostingCopy';
import { useEffect } from 'react';

export default function WordpressHosting() {

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
            <WithPriBtn 
                text={heroSection.Intro} 
                title={heroSection.Title} 
                BgImgLink={heroSection.heroBG} 
                btnLink={heroSection.btnLink} 
                btnText={heroSection.btnText}
            />
            <div className='container__width'>
                <section className='padding__block__80'>
                    <FeatureSection 
                        title={featuresCopy.title}
                    />
                </section>
                <section id='plans' className='padding__block__80'>
                    <PlanSection/>
                </section>
                <ExpertCTA/>
            </div>
        </main>
    )
}
