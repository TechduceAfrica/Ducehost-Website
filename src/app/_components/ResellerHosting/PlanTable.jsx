import style from './Reseller.module.css'

export default function PlanTable({ tableTitle, plansTableData, plansTableHead }) {
    return (
        <>
            <div className={style.table__title}>
                <h3 className="fade__in">
                    {tableTitle}
                </h3>
            </div>
            <div className={style.table__wrapper}>
                <table className={style.plan__table}>
                    <thead className="fade__in">
                        <tr>
                            {plansTableHead.map((head, index) => (
                                <th key={index}>
                                    {head.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="fade__in">
                        {plansTableData.map((data, index) => (
                            <tr key={index}>
                                <td>
                                    {data.cellOne}
                                </td>
                                <td>
                                    {data.cellTwo}
                                </td>
                                <td>
                                    {data.cellThree}
                                </td>
                                <td>
                                    {data.cellFour}
                                </td>
                                <td>
                                    {data.cellFive}
                                </td>
                                <td>
                                    {data.cellSix}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
