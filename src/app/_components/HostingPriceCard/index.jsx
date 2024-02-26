import PriBtn from '../PriBtn';
import style from './component.module.css';
import { Hosting } from '@/copyContents/PricePlan';
import PriBtnWine from '@/app/_components/PriBtnWine';

export default function HostingPriceCard({ hostingPlans }) {
    return (
        <div className={style.price__card__wrapper}>
            {hostingPlans.map((hostingplan, index) => (
                <div 
                    key={index} 
                    className={`${style.price__card} fade__in`}
                >
                    <div className={style.top}>
                        <h4>
                            {hostingplan.title}
                        </h4>
                        <p>
                            {hostingplan.text}
                        </p>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.feature}>
                        <p>
                            {hostingplan.price}
                        </p>
                        <div className={style.feature_list}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M21.5 6.99984L9.5 18.9998L4 13.4998L5.41 12.0898L9.5 16.1698L20.09 5.58984L21.5 6.99984Z" fill="#23A455"/>
                                </svg>
                                <span>
                                    {hostingplan.features.one}
                                </span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M21.5 6.99984L9.5 18.9998L4 13.4998L5.41 12.0898L9.5 16.1698L20.09 5.58984L21.5 6.99984Z" fill="#23A455"/>
                                </svg>
                                <span>
                                    {hostingplan.features.two}
                                </span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M21.5 6.99984L9.5 18.9998L4 13.4998L5.41 12.0898L9.5 16.1698L20.09 5.58984L21.5 6.99984Z" fill="#23A455"/>
                                </svg>
                                <span>
                                    {hostingplan.features.three}
                                </span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M21.5 6.99984L9.5 18.9998L4 13.4998L5.41 12.0898L9.5 16.1698L20.09 5.58984L21.5 6.99984Z" fill="#23A455"/>
                                </svg>
                                <span>
                                    {hostingplan.features.four}
                                </span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M21.5 6.99984L9.5 18.9998L4 13.4998L5.41 12.0898L9.5 16.1698L20.09 5.58984L21.5 6.99984Z" fill="#23A455"/>
                                </svg>
                                <span>
                                    {hostingplan.features.five}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={style.divider}></div>
                    <div className={style.cta}>
                        <PriBtn
                            PriBtnText= 'Get Started'
                            PriBtnLink= {hostingplan.link}
                        />
                    </div>
                </div>
            )
            )}
            <div className={`${style.xprice__card} fade__in`}>
                <div>
                    <div className={style.top}>
                        <h4>
                            {Hosting.xPlan.title}
                        </h4>
                        <p>
                            {Hosting.xPlan.subtitle}
                        </p>
                    </div>
                    <div className={style.divider}></div>
                </div>
                <div className={style.description}>
                    <p>
                        {Hosting.xPlan.description}
                    </p>
                </div>
                <div>
                    <div className={style.divider}></div>
                    <div className={style.cta}>
                        <PriBtnWine
                            PriBtnWineText= 'Get Started'
                            PriBtnWineLink= '/'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
