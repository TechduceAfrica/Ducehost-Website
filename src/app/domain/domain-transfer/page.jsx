import style from './page.module.css';
import CenteredCard from '@/components/CenteredCard';
import WithTransferSearch from '@/components/ImgBGHeroSection/WithTransferSearch';
import SmoothScroll from '@/components/LocomotiveScroll';
import { DomainTransferHero, whyTransfer } from '@/copyContents/DomainTranfer';

export default function DomainTransfer() {
    return (
        <main>
            <SmoothScroll>
                <WithTransferSearch
                    HeroSecBgImgLink={DomainTransferHero.heroBG}
                    text={DomainTransferHero.heroIntro}
                    title={DomainTransferHero.heroTitle}
                />
                <section className={`${style.section__one} container__width`}>
                    <div className={style.section__title}>
                        <h3>
                            Why Transfer to <span className='wine'> Ducehost</span>?
                        </h3>
                    </div>
                    <CenteredCard
                        centercards={whyTransfer}
                        styled={whyTransfer}
                    />
                </section>
            </SmoothScroll>
        </main>
    )
}
