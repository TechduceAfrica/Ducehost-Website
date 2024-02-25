import style from './component.module.css';
import Image from 'next/image';

export default function CenteredCard({ centercards }) {
    return (
        <div 
            className={style.cards__wrapper}
        >
            {centercards.map((centercard, index) => (
                
                <div 
                    key={index}
                    className={style.card__wrap}
                >
                    <div className={`${style.card__img} fade__in`}>
                        <Image
                            src={centercard.imgLink}
                            alt={centercard.title}
                            title={centercard.title}
                            width={centercard.width}
                            height={centercard.height}
                            style={{ maxWidth:`${centercard.width}px`, maxHeight: `${centercard.height}px`}}
                        />
                    </div>
                    <div className={style.card__title}>
                        <h4 className="fade__in">
                            {centercard.title}
                        </h4>
                    </div>
                    <div className={style.card__text}>
                        <p className="fade__in">
                            {centercard.description}
                        </p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}
