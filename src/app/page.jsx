"use client"
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect } from 'react';
import SubText from '@/components/SubText';
import HeadlineSmall from '@/components/HeadlineSmall';
import SecBtn from '@/components/SecBtn';
import PriBtn from '@/components/PriBtn';
import PriBtnWine from '@/components/PriBtnWine';

export default function Home() {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <Image
        src="/ducehost-logo.webp"
        alt="Ducehost Logo"
        width={198}
        height={34}
        priority
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
    </main>
  )
}
