import style from  "./policy.module.css";

export default function PoliciesList({ Policies }) {
    return (
        <ol className={style.policy__list}>
            {Policies.map((policiesLists, index) => (
                <li key={index}>
                    {policiesLists.Title}
                    <div dangerouslySetInnerHTML={{ __html: policiesLists.Body }} className={style.inner}></div>
                </li>
            )
            )}
        </ol>
    )
}
