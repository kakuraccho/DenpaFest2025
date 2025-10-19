import * as React from "react"

import SideBarContent from "../contents/SidebarContent"

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
                    <SideBarContent />
                </nav>
            </aside>
        </>
    )
}