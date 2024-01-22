import { wcdSection } from '@/copyContents/DomainSearchPageCopy'
import Image from 'next/image'
import WcuListCard from './WcuListCard'
import style from './component.module.css'

export default function WcuSection() {
    return (
        <div className={style.wcu__sec__wrapper}>
            <div 
                className={style.wcu__img}
                data-scroll 
                data-scroll-speed="0.1"
            >
                <Image
                    src={wcdSection.wcdImg}
                    alt={wcdSection.wcdtitle}
                    title={wcdSection.wcdtitle}
                    width={wcdSection.wcdImgWidth}
                    height={wcdSection.wcdImgHeight}
                />
            </div>
            <div  
                className={style.wcu__sec__block}
                data-scroll 
                data-scroll-speed="0.11"
            >
                <div>
                    <h3>
                        {wcdSection.wcdtitle}
                    </h3>
                </div>
                <div>
                    <WcuListCard
                        wcuListCards={wcdSection.wcdList}
                    />
                </div>
            </div>
        </div>
    )
}
