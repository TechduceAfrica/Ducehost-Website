import { otherServices } from "@/copyContents/DomainSearchPageCopy";
import style from './component.module.css'
import OtherServicesLists from "./OtherServicesLists";
import Image from "next/image";

export default function OtherDomainNeeds() {
  return (
    <div className={style.other__domain__wrapper}>
        <div className="fade__in">
            <Image
                src={otherServices.img}
                alt='Ducehost is not just to search a name'
                title='Ducehost is not just to search a name'
                width={otherServices.imgWidth}
                height={otherServices.imgheight}
            />
        </div>
        <div className={style.other__domain__content}>
            <div className={style.other__domain__content__intro}>
                <h3 className="fade__in">
                    {otherServices.title}
                </h3>
                <p className="fade__in">
                    {otherServices.description}
                </p>
            </div>
            <div>
                <OtherServicesLists
                    otherServicesCards={otherServices.services}
                />
            </div>
        </div>
    </div>
  )
}
