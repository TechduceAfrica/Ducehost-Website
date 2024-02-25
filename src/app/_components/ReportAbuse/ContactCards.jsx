import Image from "next/image";
import style from './ReportAbuse.module.css'
import Link from "next/link";

export default function ContactCards({ contactCards }) {
    return (
        <div className={style.contact__card__wrapper}>
            {contactCards.map((contactCard, index) => (
                <div key={index} className={`${style.contact__card} fade__in`}>
                    <div>
                        <Image
                            src={contactCard.icon}
                            alt={contactCard.title}
                            title={contactCard.title}
                            width={48}
                            height={48}
                        />   
                    </div>
                    <div>
                        <h4>
                            {contactCard.title} 
                        </h4>
                    </div>
                    <div>
                        <p>
                            {contactCard.description}
                        </p>
                    </div>
                    <div  className={style.contact__card__link}>
                        <Link href={contactCard.link}>
                            Learn more 
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <path d="M6.62436 15.7859C6.42446 15.586 6.31216 15.3148 6.31216 15.032C6.31216 14.7493 6.42446 14.4781 6.62436 14.2782L11.9027 8.99984L6.62436 3.72152C6.43012 3.52041 6.32264 3.25105 6.32507 2.97146C6.3275 2.69188 6.43965 2.42443 6.63735 2.22672C6.83506 2.02902 7.10251 1.91687 7.38209 1.91444C7.66168 1.91201 7.93104 2.0195 8.13215 2.21373L14.1644 8.24594C14.3643 8.44591 14.4766 8.71709 14.4766 8.99984C14.4766 9.28259 14.3643 9.55376 14.1644 9.75373L8.13215 15.7859C7.93218 15.9858 7.66101 16.0981 7.37825 16.0981C7.0955 16.0981 6.82433 15.9858 6.62436 15.7859Z" fill="#23A455"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            )
            )}
        </div>
    )
}
