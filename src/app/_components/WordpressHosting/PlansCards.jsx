import PriBtn from '../PriBtn'
import style from './wordpresshosting.module.css'

export default function PlansCards({ Plans }) {
    return (
        <div className={style.plan__cards__wrapper}>
            {Plans.map((plan, index) => (
                <div key={index} className={`${style.plan__card__wrapper} fade__in`}>
                    <div>
                        <h3>
                            {plan.label}
                        </h3>
                    </div>
                    <div className={style.divider}></div>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z" fill="#23A455"/>
                            </svg>
                            {plan.website} Website
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z" fill="#23A455"/>
                            </svg>
                            {plan.space}GB Disk Space
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z" fill="#23A455"/>
                            </svg>
                            Unlimited Bandwidth
                        </li>
                    </ul>
                    <div className={style.btn}>
                        <PriBtn 
                            PriBtnLink={plan.url} 
                            PriBtnText='Get Started'
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
