'use client'
import ExpertCTA from '@/app/_components/ExpertCTA';
import FAQs from '@/app/_components/FAQs';
import HostingPriceCard from '@/app/_components/HostingPriceCard';
import Benefits from '@/app/_components/ResellerHosting/Benefits';
import HeroSection from '@/app/_components/SecurityPage/HeroSection';
import KeyFeature from '@/app/_components/SharedHosting/KeyFeature';
import SectionTitle from '@/app/_components/SharedHosting/SectionTitle';
import { Hosting } from '@/copyContents/PricePlan';
import { WhyChoose, faqs, heroCopy, keyFeatureCopy, planLabel } from '@/copyContents/SharedHostingCopy';
import { useEffect } from 'react';

export default function SharedHosting() {

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
                heroContent={heroCopy}
            />
            <section className='padding__block__80'>
                <KeyFeature 
                    title={keyFeatureCopy.title} 
                    text={keyFeatureCopy.desc}
                    Features={keyFeatureCopy.feature}
                />
            </section>
            <section className='margin__block__80'>
                <SectionTitle 
                    title={planLabel.title} 
                    text={planLabel.text}
                />
                <HostingPriceCard 
                    hostingPlans={Hosting.plans}
                />
            </section>
            <section className='padding__block__80'>
                <SectionTitle 
                    title={WhyChoose.title} 
                    text={WhyChoose.text}
                />
                <Benefits 
                    Cards={WhyChoose.cards}
                />
            </section>
            <section className='margin__block__80'>
                <FAQs 
                    faqsContent={faqs}
                />
            </section>
            <ExpertCTA/>
        </main>
    )
}
