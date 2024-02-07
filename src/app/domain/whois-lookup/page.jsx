'use client'
import ExpertCTA from '@/app/_components/ExpertCTA';
import ForWhoisLookUp from '@/app/_components/ImgBGHeroSection/ForWhoisLookUp';
import { WLHeroCopy } from '@/copyContents/WhoisLookupPage';
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
            <ForWhoisLookUp 
                HeroSecBgImgLink={WLHeroCopy.heroBG}
                text={WLHeroCopy.heroIntro}
                title={WLHeroCopy.heroTitle}
            />
            <ExpertCTA/>
        </main>
    )
}
