

export default function PlanTable({ plansTableData, plansTableHead }) {
    return (
        <table>
            <thead>
                <tr>
                    {plansTableHead.map((head, index) => (
                        <th key={index}>
                            {head.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
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
    )
}
