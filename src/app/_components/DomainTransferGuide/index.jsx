import StepOne from './StepOne';
import StepTwo from './StepTwo';
import style from './domaintransferguide.module.css';
import { DomainTransferGuide as Copy } from '@/copyContents/DomainTranfer';

export default function DomainTransferGuide() {

    return (
        <>
            <div className={`${style.step__topic__wrapper} margin__top__80`}>
                <h3>
                    Step-by-Step <span className='wine'> Transfer </span>Guide
                </h3>
                <p>
                    Transferring your domain is <span className='wine'> simple</span>, and we are here to guide you through the process. 
                </p>
            </div>
            <div className={style.steps__sec}>
                <div className={`${style.step__sec__wrapper} responsive__flex m__text__align__center`}>
                    <StepOne {...Copy.stepOne}/>
                </div>
                <div className={`${style.step__sec__wrapper} responsive__flex m__text__align__center`}>
                    <StepTwo {...Copy.stepTwo}/>
                </div>
                <div className={`${style.step__sec__wrapper} responsive__flex m__text__align__center`}>
                    <StepOne {...Copy.stepThree}/>
                </div>
                <div className={`${style.step__sec__wrapper} responsive__flex m__text__align__center`}>
                    <StepOne {...Copy.stepFour}/>
                </div>
            </div>
        </>
    )
}
