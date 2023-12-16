"use client"

import { useEffect } from 'react';
import SubText from '@/components/SubText';
import HeadlineSmall from '@/components/HeadlineSmall';
import SecBtn from '@/components/SecBtn';
import PriBtn from '@/components/PriBtn';
import PriBtnWine from '@/components/PriBtnWine';
import ImgBGHeroSection from '@/components/ImgBGHeroSection';
import Testimonial from '@/components/Testimonial';
import FAQs from '@/components/FAQs';
import { FAQsCopy, homeCopy } from '@/copyContents/HomePage';
import RightLeftLayout from '@/components/RightLeftLayout';
import HostingPriceCard from '@/components/HostingPriceCard';
import { Hosting } from '@/copyContents/PricePlan';

import CenteredCard from '@/components/CenteredCard';
import { whyTransfer } from '@/copyContents/DomainTranfer';

export default function SamplePage() {

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
      {/* <NavBar/> */}
      <ImgBGHeroSection
        HeroSecBgImgLink="/images/Home%20Hero%20Section_Ducehost%20website%20hosting%20and%20domain%20name%20purchase.webp"
        text= "Grow Your Dream Business Online"
        title= "For a Reliable Hosting Service, We Are Your Trusted Partner."
      />
      <div>
        <h1>H1 One</h1>
        <h2>H2 Two</h2>
        <h3>H3 Three</h3>
        <h4>H4 Four</h4>
        <h5>H5 Five</h5>
        <h6>H6 Six</h6>
        <p>Paragraph</p>
        <SubText
          text='Sub text font'
          wine= 'with the wine colored font'
          textContiue= 'and then black again'
        />
        <HeadlineSmall
          text= 'Headline small font' 
          wine= 'with the wine colored font'
          textContiue= 'and then black again'
        />
      </div>
      <div>
        <SecBtn
          SecBtnText= 'Sec Button'
          SecBtnLink= '/'
        />

        <PriBtn
          PriBtnText= 'Pri Button'
          PriBtnLink= '/'
        />

        <PriBtnWine
          PriBtnWineText= 'Wine Button'
          PriBtnWineLink= '/'
        />
      </div>

      <CenteredCard
        centercards={whyTransfer}
        styled={whyTransfer}
      />

      <HostingPriceCard hostingPlans={Hosting.plans}/>

      <RightLeftLayout 
        rlLayout={homeCopy.wcuList}/>
      <Testimonial/>
      <FAQs faqsContent={FAQsCopy}/>
    </main>
  )
}
