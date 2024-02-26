'use client'
import { FadeIn, FadeInContainer } from '@/app/_components/EntranceAnimation';
import ExpertCTA from '@/app/_components/ExpertCTA';
import FAQs from '@/app/_components/FAQs';
import ForWhoisLookUp from '@/app/_components/ImgBGHeroSection/ForWhoisLookUp';
import Discover from '@/app/_components/UseWhois/Discover';
import MapUseWhoisCard from '@/app/_components/UseWhois/MapUseWhoisCard';
import WhyUse from '@/app/_components/UseWhois/WhyUse';
import { WLDiscover, WLFAQs, WLHeroCopy, WLHowToSteps, WLWhyUse } from '@/copyContents/WhoisLookupPage';
import { useEffect } from 'react';

export default function WhoisLookup() {

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
            <FadeInContainer>
                <FadeIn>
                    <ForWhoisLookUp 
                        HeroSecBgImgLink={WLHeroCopy.heroBG}
                        text={WLHeroCopy.heroIntro}
                        title={WLHeroCopy.heroTitle}
                    />
                    <section className='container__width padding__block__80'>
                        <MapUseWhoisCard 
                            title={WLHowToSteps.title} 
                            WLHowToSteps={WLHowToSteps.steps}
                        />
                    </section>
                    <section className='container__width padding__block__80'>
                        <Discover 
                            title={WLDiscover.title} 
                            img={WLDiscover.img}
                            width={WLDiscover.width}
                            height={WLDiscover.height} 
                            copyContent={WLDiscover.list}
                        />
                    </section>
                    <section className='container__width padding__block__80'>
                        <WhyUse 
                            title={WLWhyUse.title} 
                            Cards={WLWhyUse.cards}
                        />
                    </section>
                    <section className='container__width padding__block__80'>
                        <FAQs 
                            faqsContent={WLFAQs}
                        />
                    </section>
                    <ExpertCTA/>
                </FadeIn>
            </FadeInContainer>
        </main>
    )
}
