import * as React from "react"
import { Link } from "gatsby"

export default function Home() {
    return (
        <main>
            <ul>
                <li><Link to="/events/">イベント一覧</Link></li>
                <li><Link to="/exhibitors/">出店者情報</Link></li>
                <li><Link to="/messages/">挨拶</Link></li>
            </ul>
        </main>
    )
}
