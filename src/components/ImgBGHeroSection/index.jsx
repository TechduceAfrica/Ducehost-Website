import DomainSearchBar from "../DomainSearchBar";
import style from './component.module.css';

export default function sectionImgBGHeroSection( { HeroSecBgImgLink, text, title }) {

    const styles = {
        background: `url(${HeroSecBgImgLink})`,
        backgroundSize: 'cover',
    }

    return (
        <section style={styles} className={style.hero__section}>
            <p className={style.hero__section__intro__text} data-scroll data-scroll-speed="0.15">
                {text}
            </p>
            <h1 className={style.hero__section__title} data-scroll data-scroll-speed="0.1">
                {title}
            </h1>
            <DomainSearchBar/>
        </section>
    )
}
