import Image from 'next/image'
import style from './UseWhois.module.css'

export default function DiscoverList({ img, title, width, height, Contents }) {
    return (
        <div className={style.discover__content__wrapper}>
            <div className={style.discover__content__img}>
                <Image src={img} alt={title} width={width} height={height}/>
            </div>
            <div className={style.discover__content__list}>
                {Contents.map((content, index) => (
                    <div key={index}>
                        <div>
                            <Image src={content.icon} alt={content.label} width={40} height={40}/>
                        </div>
                        <div>
                            <h3 className='green'>
                                {content.label}
                            </h3>
                            <p>
                                {content.desc}
                            </p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
