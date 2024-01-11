'use client'
import { useEffect } from 'react';
import DomainTransferGuide from '@/components/DomainTransferGuide';
import style from './page.module.css';
import CenteredCard from '@/components/CenteredCard';
import WithTransferSearch from '@/components/ImgBGHeroSection/WithTransferSearch';
import { DomainTransferHero, whyTransfer, DomainTransferFAQs } from '@/copyContents/DomainTranfer';
import FAQs from '@/components/FAQs';

export default function DomainTransfer() {

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
                <WithTransferSearch
                    HeroSecBgImgLink={DomainTransferHero.heroBG}
                    text={DomainTransferHero.heroIntro}
                    title={DomainTransferHero.heroTitle}
                />
                <section className={`${style.section__one} container__width`}>
                    <div className={style.section__title}>
                        <h3>
                            Why Transfer to <span className='wine'> Ducehost</span>?
                        </h3>
                    </div>
                    <CenteredCard
                        centercards={whyTransfer}
                        styled={whyTransfer}
                    />
                </section>
                <section className='container__width'>
                    <DomainTransferGuide/>
                </section>
                <section className='container__width margin__block__2'>
                    <FAQs 
                        faqsContent={DomainTransferFAQs}
                    />
                </section>
        </main>
    )
}
