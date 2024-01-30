import { PrivacyPolicyCopy } from '@/copyContents/privacyPolicy'
import React from 'react'
import PoliciesList from '../_components/PrivacyPolicy/PoliciesList'

export default function PrivacyPolicy() {
    return (
        <main className='container__width'>
            <h1>Privacy Policy</h1>
            <span>
                Your Data, Your Privacy, Our Commitment
            </span>
            <p>
                {PrivacyPolicyCopy.Date}
            </p>
            <div>
                <PoliciesList Policies={PrivacyPolicyCopy.Policies}/>
            </div>
        </main>
    )
}
