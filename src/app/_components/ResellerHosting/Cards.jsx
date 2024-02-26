import style from './Reseller.module.css'
import PriBtn from '../PriBtn'
import PriBtnWine from '../PriBtnWine'

export default function Cards({ secTitle, Cards, enp }) {
    return (
        <div className={`${style.price__card__sec__wrapper} padding__block__80`}>
            <div>
                <h2 className="fade__in">
                    {secTitle}
                </h2>
            </div>
            <div className={style.price__card__wrapper}>
                {Cards.map((card, index) => (
                    <div key={index} className={`${style.price__card} border__1 fade__in`}>
                        <div>
                            <h3>
                                {card.title}
                            </h3>
                            <p>
                                {card.desc}
                            </p>
                        </div>
                        <div className={style.divider}></div>
                        <div>
                            <span>
                                {card.price}
                            </span>
                            <PriBtn 
                                PriBtnLink={card.link} 
                                PriBtnText={card.linkText} 
                            />
                        </div>
                    </div>
                ))}
                <div className={`${style.enp__price__card} fade__in`}>
                    <div>
                        <h3 className='wine'>
                            {enp.title}
                        </h3>
                        <p>
                            {enp.desc}
                        </p>
                    </div>
                    <div className={style.divider}></div>
                    <div>
                        <span>
                            {enp.label}
                        </span>
                        <PriBtnWine 
                            PriBtnWineLink={enp.link} 
                            PriBtnWineText={enp.linkText} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
