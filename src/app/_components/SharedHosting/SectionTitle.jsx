import style from './sharedhosting.module.css'

export default function SectionTitle({ title, text }) {
    return (
        <div className={style.section__title}>
            <h2>
                {title}
            </h2>
            <p>
                {text}
            </p>
        </div>
    )
}
