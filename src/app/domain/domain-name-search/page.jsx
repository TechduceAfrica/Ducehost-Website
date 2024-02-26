'use client'
import { useEffect } from 'react';
import { FadeIn, FadeInContainer } from '@/app/_components/EntranceAnimation';
import ImgBGHeroSection from '@/app/_components/ImgBGHeroSection';
import WcuSection from '@/app/_components/WcdSection';
import DiscoverDomain from '@/app/_components/DiscoverDomain';
import OtherDomainNeeds from '@/app/_components/OtherDomainNeeds';
import FAQs from '@/app/_components/FAQs';
import ExpertCTA from '@/app/_components/ExpertCTA';
import Image from 'next/image';
import Link from 'next/link';
import { DomainSearchFAQs, HeroSection, banner } from '@/copyContents/DomainSearchPageCopy';
import style from './page.module.css';

export default function DomainNameSearch() {

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
                HeroSecBgImgLink={HeroSection.heroBG}
                text={HeroSection.heroIntro}
                title={HeroSection.heroTitle}
            />
            <FadeInContainer>
                <FadeIn>
                    <div className='container__width'>
                        <section className={`${style.tld__card__sec} fade__in`}>
                            <Link href={banner.url} title={banner.alt}>
                                <Image {...banner}/>
                            </Link>
                        </section>
                        <section className='padding__block__80'>
                            <WcuSection/>
                        </section>
                    </div>
                    <section>
                        <DiscoverDomain/>
                    </section>
                    <section className='container__width'>
                        <OtherDomainNeeds/>
                    </section>
                    <section className='container__width margin__block__2'>
                        <FAQs 
                            faqsContent={DomainSearchFAQs}
                        />
                    </section>
                    <ExpertCTA/>
                </FadeIn>
            </FadeInContainer>
        </main>

    )
}
