"use client"
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect } from 'react';

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
        className={styles.vercelLogo}
        width={198}
        height={34}
        priority
      />
    </main>
  )
}
