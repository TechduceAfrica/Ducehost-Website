import CtaSection from '@/app/_components/ReportAbuse/CtaSection'
import HeroSection from '@/app/_components/ReportAbuse/HeroSection'
import { CTAsectionCardCopy } from '@/copyContents/ReportAbuseCopy'
import React from 'react'

export default function ReportAbuse() {
    return (
        <main>
            <HeroSection/>
            <CtaSection contactCardProps={CTAsectionCardCopy}/>
        </main>
    )
}
