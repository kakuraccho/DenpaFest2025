import * as React from "react"
import data from "../data/CommitteeData.json"

export default function CommitteeContent() {

    return (
        <div className="overflow-x-auto m-2 border-2 rounded-md">
            <table className="text-sm w-full table-auto">
                <thead className="text-left bg-gray-100">
                    <tr>
                        <th>役職</th>
                        <th>学年</th>
                        <th>クラス・学科</th>
                        <th>氏名</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(data => (
                        <tr key={data.index}>
                            <td>{data.roll}</td>
                            <td>{data.grade}</td>
                            <td>{data.class}</td>
                            <td>{data.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}