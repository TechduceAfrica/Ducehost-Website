import Image from 'next/image'
import style from './UseWhois.module.css'

export default function DiscoverList({ img, title, width, height, Contents }) {
    return (
        <div className={style.discover__content__wrapper}>
            <div className={style.discover__content__img}>
                <Image 
                    src={img} 
                    alt={title} 
                    width={width} 
                    height={height} 
                    className="fade__in"
                />
            </div>
            <div className={style.discover__content__list}>
                {Contents.map((content, index) => (
                    <div key={index}>
                        <div>
                            <Image 
                                src={content.icon} 
                                alt={content.label} 
                                width={40} 
                                height={40} 
                                className="fade__in"
                            />
                        </div>
                        <div>
                            <h3 className='green fade__in'>
                                {content.label}
                            </h3>
                            <p className="fade__in">
                                {content.desc}
                            </p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
