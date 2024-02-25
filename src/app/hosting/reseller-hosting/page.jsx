'use client'
import { useEffect } from 'react';
import ExpertCTA from '@/app/_components/ExpertCTA';
import FAQs from '@/app/_components/FAQs';
import Benefits from '@/app/_components/ResellerHosting/Benefits';
import Cards from '@/app/_components/ResellerHosting/Cards';
import PlanTable from '@/app/_components/ResellerHosting/PlanTable';
import Steps from '@/app/_components/ResellerHosting/Steps';
import HeroSection from '@/app/_components/SecurityPage/HeroSection'
import { heroCopy, 
            planSec, 
            plansCard, 
            plansTableData, 
            plansTableHeads, 
            plansTableTitle, 
            resellerFAQs, 
            resellersBenefit, 
            simpleSteps } from '@/copyContents/ResellerHostingCopy'
import { FadeIn, FadeInContainer } from '@/app/_components/EntranceAnimation';

export default function ResellerHosting() {

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
            <FadeInContainer>
                <FadeIn>
                    <HeroSection 
                        heroContent={heroCopy} 
                    />
                    <section className='margin__block__80'>
                        <Cards 
                            secTitle={planSec.title} 
                            Cards={plansCard} 
                            enp={planSec.enp} 
                        />
                    </section>
                    <section className='margin__block__80'>
                        <PlanTable 
                            tableTitle={plansTableTitle.title}
                            plansTableHead={plansTableHeads} 
                            plansTableData={plansTableData} 
                        />
                    </section>
                    <section className='margin__block__80'>
                        <Steps 
                            title={simpleSteps.title}
                            stepOne={simpleSteps.stepOne} 
                            stepTwo={simpleSteps.stepTwo} 
                            stepThree={simpleSteps.stepThree}
                        />
                    </section>
                    <section className='margin__block__80'>
                        <Benefits 
                            title={resellersBenefit.title} 
                            Cards={resellersBenefit.cards} 
                        />
                    </section>
                    <FAQs faqsContent={resellerFAQs} />
                    <ExpertCTA/>
                </FadeIn>
            </FadeInContainer>
        </main>
    )
}
