import React from 'react'
import PoliciesList from '../_components/PrivacyPolicy/PoliciesList'
import { TermsAndConditionsCopy } from '@/copyContents/TermsAndConditionsCopy'

export default function TermsAndConditions() {
    return (
        <main className='container__width'>
            <h1>TERMS AND CONDITIONS</h1>
            <span>
                Your Guide to the Rules and Regulations Governing Our Services.
            </span>
            <div>
                <PoliciesList Policies={TermsAndConditionsCopy}/>
            </div>
        </main>
    )
}
