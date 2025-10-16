import * as React from "react"
import { Link } from "gatsby"

export default function SideBarContent() {

    return (
        <ul className="flex flex-col gap-2">
            <li className="h-10">
                <Link to="/" className="flex items-center h-full w-full">00. Top</Link>
            </li>

            <li className="h-10">
                <Link to="/messages" className="flex items-center h-full w-full">01. Messages</Link>
            </li>

            <li className="h-10">
                <Link to="/vendors" className="flex items-center h-full w-full">02. Vendors</Link>
            </li>

            <li className="h-10">
                <Link to="/events" className="flex items-center h-full w-full">03. Events</Link>
            </li>

            <li className="h-10">
                <Link to="/timetable" className="flex items-center h-full w-full">04. Time Table</Link>
            </li>

            <li className="h-10">
                <Link to="/committee" className="flex items-center h-full w-full">05. Committee</Link>
            </li>
        </ul>

    )
}