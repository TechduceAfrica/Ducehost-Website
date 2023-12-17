import { otherServices } from "@/copyContents/DomainSearchPageCopy";
import style from './component.module.css'
import OtherServicesLists from "./OtherServicesLists";
import Image from "next/image";

export default function OtherDomainNeeds() {
  return (
    <div>
        <div>
            <Image
                src={otherServices.img}
                alt='Ducehost is not just to search a name'
                title='Ducehost is not just to search a name'
                width={otherServices.imgWidth}
                height={otherServices.imgheight}
            />
        </div>
        <div>
            <div>
                <h3>
                    {otherServices.title}
                </h3>
                <p>
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
