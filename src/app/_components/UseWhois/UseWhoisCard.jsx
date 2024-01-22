import Image from "next/image";
import { style } from "./UseWhois.module.css"

export default function UseWhoisCard({ img, label, desc }) {
    return (
        <div className={style.usewhoiscard__wrapper}>
            <Image 
                src={img} 
                alt={label} 
                title={label} 
                width={134} 
                height={80}
            />
            <div>
                <h4>
                    {label} 
                </h4>
            </div>
            <div>
                <p>
                    {desc} 
                </p>
            </div>
        </div>
    )
}
