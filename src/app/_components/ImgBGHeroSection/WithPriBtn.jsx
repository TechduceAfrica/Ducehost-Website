'use client'
import PriBtn from '../PriBtn';
import style from './component.module.css';

export default function WithPriBtn({ BgImgLink, text, title, btnLink, btnText }) {

    const styles = {
        background: `url(${BgImgLink})`,
        backgroundSize: 'cover',
    }

    return (
        <section 
            style={styles} 
            className={style.hero__section}
        >
            <p 
                className={`${style.hero__section__intro__text} fade__in`} 
                data-scroll data-scroll-speed="0.15"
            >
                {text}
            </p>
            <h1 
                className={`${style.hero__section__title} fade__in`} 
                data-scroll data-scroll-speed="0.1"
            >
                {title}
            </h1>
            <div 
                className={style.hero__center__btn} 
                data-scroll data-scroll-speed="0.05"
            >
                <PriBtn 
                    PriBtnLink={btnLink} 
                    PriBtnText={btnText}
                />
            </div>
        </section>
    )
}
