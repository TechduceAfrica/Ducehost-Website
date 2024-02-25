import DomainSearchOnly from '../DomainSearchBar/DomainSearchOnly'
import Image from 'next/image'
import { discoverSection } from '@/copyContents/DomainSearchPageCopy'
import style from './component.module.css'

export default function DiscoverDomain() {
  return (
    <div className={style.discover__sec}>
        <div className='container__width'>
            <div>
                <div>
                    <h3 className="fade__in">
                        Discover a domain name that  best describes 
                        <span className='green'> YOU </span>
                        or <span className='green'> Your Business</span>
                    </h3>
                </div>
                <div>
                    <DomainSearchOnly/>
                </div>
            </div>
            <div className={`${style.discover__sec__img} fade__in`}>
                <Image
                    src={discoverSection.img}
                    alt='Discover a domain name'
                    title='Discover a domain name'
                    width={discoverSection.imgWidth}
                    height={discoverSection.imgheight}
                />
            </div>
        </div>
    </div>
  )
}
