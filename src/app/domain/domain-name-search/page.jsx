'use client'
import ImgBGHeroSection from '@/components/ImgBGHeroSection';
import style from './page.module.css';
import { useEffect } from 'react';
import { DomainSearchFAQs, HeroSection } from '@/copyContents/DomainSearchPageCopy';
import TLDPriceCards from '@/components/TLDPriceCards';
import WcuSection from '@/components/WcdSection';
import DiscoverDomain from '@/components/DiscoverDomain';
import OtherDomainNeeds from '@/components/OtherDomainNeeds';
import FAQs from '@/components/FAQs';

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
            <div className='container__width'>
                <section className={style.tld__card__sec}>
                    <div className={style.tld__card__content}>
                        <h3>
                            Top Level Domain (TLD) Spotlight
                        </h3>
                        <p>
                            Find the perfect address for your online venture.
                        </p>
                    </div>
                    <div>
                        <TLDPriceCards/>
                    </div>
                </section>
                <section>
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
        </main>

    )
}
