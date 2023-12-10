import DomainSearchBar from "../DomainSearchBar";
import style from './component.module.css';

export default function ImgBGHeroSection( { HeroSecBgImgLink, text, title }) {

    const styles = {
        background: `url(${HeroSecBgImgLink})`,
        backgroundSize: 'cover',
    }

    return (
        <main style={styles} className={style.hero__section}>
            <p className={style.hero__section__intro__text} data-scroll data-scroll-speed="0.15">
                {text}
            </p>
            <h1 className={style.hero__section__title} data-scroll data-scroll-speed="0.1">
                {title}
            </h1>
            <DomainSearchBar/>
        </main>
    )
}
