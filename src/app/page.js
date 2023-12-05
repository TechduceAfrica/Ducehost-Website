import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
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
