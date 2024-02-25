import DomainTransferInputField from '../DomainSearchBar/DomainTransferInputField';
import style from './component.module.css';

export default function WithTransferSearch({ HeroSecBgImgLink, text, title }) {

    const styles = {
        background: `url(${HeroSecBgImgLink})`,
        backgroundSize: 'cover',
    }

    return (
        <section 
            style={styles} 
            className={style.hero__section}
        >
            <p 
                className={`${style.hero__section__intro__text} fade__in`} 
                data-scroll 
                data-scroll-speed="0.15"
            >
                {text}
            </p>
            <h1 
                className={`${style.hero__section__title} fade__in`} 
                data-scroll 
                data-scroll-speed="0.1"
            >
                {title}
            </h1>
            <DomainTransferInputField/>
        </section>
    )
}
