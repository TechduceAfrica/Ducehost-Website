import Image from "next/image";
import style from './component.module.css'

export default function WcuListCard({ wcuListCards }) {
    return (
        <div className={style.wcu__card__wrapper}>
            {wcuListCards.map((wcuCard, index) => (
                <div key={index} className={style.wcu__card}>
                    <div className="fade__in">
                        <Image
                            src={wcuCard.icon}
                            alt={wcuCard.title}
                            title={wcuCard.title}
                            width={48}
                            height={48}
                        />   
                    </div>
                    <div>
                        <h4 className="fade__in">
                            {wcuCard.title} 
                        </h4>
                    </div>
                    <div>
                        <p className="fade__in">
                            {wcuCard.description}
                        </p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}
