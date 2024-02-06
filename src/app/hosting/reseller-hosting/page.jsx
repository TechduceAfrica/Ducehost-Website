'use client'
import Benefits from '@/app/_components/ResellerHosting/Benefits';
import Cards from '@/app/_components/ResellerHosting/Cards';
import PlanTable from '@/app/_components/ResellerHosting/PlanTable';
import Steps from '@/app/_components/ResellerHosting/Steps';
import HeroSection from '@/app/_components/SecurityPage/HeroSection'
import { heroCopy, planSec, plansCard, plansTableData, plansTableHeads, resellersBenefit, simpleSteps } from '@/copyContents/ResellerHostingCopy'
import { useEffect } from 'react';

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
            <HeroSection 
                heroContent={heroCopy} 
            />
            <section>
                <Cards 
                    secTitle={planSec.title} 
                    Cards={plansCard} 
                    enp={planSec.enp} 
                />
            </section>
            <section>
                <PlanTable 
                    plansTableHead={plansTableHeads} 
                    plansTableData={plansTableData} 
                />
            </section>
            <section>
                <Steps 
                    title={simpleSteps.title}
                    stepOne={simpleSteps.stepOne} 
                    stepTwo={simpleSteps.stepTwo} 
                    stepThree={simpleSteps.stepThree}
                />
            </section>
            <section>
                <Benefits 
                    title={resellersBenefit.title} 
                    Cards={resellersBenefit.cards} 
                />
            </section>
        </main>
    )
}
