import PriBtn from '../PriBtn'
import style from './component.module.css'

export default function PriceCard({ tldPriceCards }) {
    return (
        <div className={style.tld__price__card__wrapper}>
            {tldPriceCards.map((tldPriceCard, index) => (
                <div key={index} className={style.tld__price__card}>
                    <div>
                        <h4>
                            {tldPriceCard.title}
                        </h4>
                    </div>
                    <div>
                        <p>
                            {tldPriceCard.text}
                        </p>
                    </div>
                    <div>
                        <span  className={style.price__label}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 9H6V3H8L11.42 9H16V3H18V9H20V11H18V13H20V15H18V21H16L12.57 15H8V21H6V15H4V13H6V11H4V9ZM8 9H9.13L8 7.03V9ZM8 11V13H11.42L10.28 11H8ZM16 17V15H14.85L16 17ZM12.56 11L13.71 13H16V11H12.56Z" fill="#1D1B20"/>
                            </svg>
                            {tldPriceCard.price}
                        </span>
                    </div>
                    <div>
                        <PriBtn
                            PriBtnText= 'Add to Cart'
                            PriBtnLink= '/'
                        />
                    </div>
                </div>
            )
            )}
        </div>
    )
}
