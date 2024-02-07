'use client'
import ExpertCTA from '@/app/_components/ExpertCTA'
import HeroSection from '@/app/_components/SecurityPage/HeroSection'
import PriceCard from '@/app/_components/SecurityPage/PriceCard'
import WhyChooseCard from '@/app/_components/SecurityPage/WhyChooseCard'
import { MaintenanceCopyHero, PriceCardContent, planSection, whyChoose } from '@/copyContents/MaintenanceCopy'
import { useEffect } from 'react';

export default function Maintenance() {

    useEffect( () => {
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    return (
        <main className='container__width'>
            <HeroSection 
                heroContent={MaintenanceCopyHero}
            />
            <section className='margin__block__80'>
                <WhyChooseCard 
                    label={whyChoose.title}
                    Cards={whyChoose.card}
                />
            </section>
            <section className='padding__block__80'>
                <PriceCard 
                    PlanLabel={planSection} 
                    PriceCardContent={PriceCardContent}
                />
            </section>
            <ExpertCTA/>
        </main>
    )
}
