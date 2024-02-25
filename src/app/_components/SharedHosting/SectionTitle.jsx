import style from './sharedhosting.module.css'

export default function SectionTitle({ title, text }) {
    return (
        <div className={style.section__title}>
            <h2 className="fade__in">
                {title}
            </h2>
            <p className="fade__in">
                {text}
            </p>
        </div>
    )
}
