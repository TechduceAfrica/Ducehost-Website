import Image from "next/image";
import style from './UseWhois.module.css'

export default function UseWhoisCard({ img, label, desc, width, height }) {
    return (
        <div className={style.card__wrapper}>
            <Image 
                src={img} 
                alt={label} 
                title={label} 
                width={width} 
                height={height}
            />
            <div>
                <h3>
                    {label} 
                </h3>
            </div>
            <div>
                <p dangerouslySetInnerHTML={{ __html: desc }} >
                </p>
            </div>
        </div>
    )
}
