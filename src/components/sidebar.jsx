import * as React from "react"
import { Link } from "gatsby"

export default function SideBar({ isSidebarOpen, toggleSidebar }) {
    
    return (
        <>
            <div
                className={`absolute inset-0 bg-black z-30 transition-opacity duration-300
                    ${isSidebarOpen ? "opacity-50" : "opacity-0 pointer-events-none"}`}
                onClick={toggleSidebar}
            />
            <aside className={`
                absolute top-0 bottom-0 left-0 w-64 z-40 bg-white shadow-right p-4 transform
                transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <nav>
                    <ul className="flex flex-col gap-2">
                        <li className="h-10">
                            <Link to="/" className="flex items-center h-full w-full">00. Over View</Link>
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
                            <Link to="/" className="flex items-center h-full w-full">04. Time Table</Link>
                        </li>

                        <li className="h-10">
                            <Link to="/committee" className="flex items-center h-full w-full">05. Committee</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}