import style from './UseWhois.module.css'
import UseWhoisCard from './UseWhoisCard'

export default function WhyUse({ title, Cards }) {
    return (
        <>
            <div className={style.title__wrapper}>
                <h2 dangerouslySetInnerHTML={{ __html: title }} >
                </h2>
            </div>
            <div className={style.whyuse__cards__wrapper}>
                {Cards.map((card, index) => (
                    <UseWhoisCard 
                        key={index}
                        img={card.img} 
                        width={card.width}
                        height={card.height}
                        label={card.label} 
                        desc={card.desc}
                    />
                ))}
            </div>
        </>
    )
}
