import UseWhoisCard from './UseWhoisCard'
import style from './UseWhois.module.css'

export default function MapUseWhoisCard({ title, WLHowToSteps}) {
    return (
        <div>
            <div className={style.title__wrapper}>
                <h2 dangerouslySetInnerHTML={{ __html: title }} className="fade__in">
                </h2>
            </div>
            <div className={style.cards__wrapper}>
                {WLHowToSteps.map(( usewhocard, index ) => (
                    <UseWhoisCard 
                        key={index}
                        img={usewhocard.img} 
                        width={usewhocard.width}
                        height={usewhocard.height}
                        label={usewhocard.label} 
                        desc={usewhocard.desc}
                    />
                ))}
            </div>
        </div>
    )
}
