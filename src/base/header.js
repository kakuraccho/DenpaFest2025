import { Link } from "gatsby"
import * as React from "react"

export default function Header({ toggleSidebar, isSidebarOpen }) {
    
    return (
        <header className="bg-gray-100 shadow-md p-4 flex relative items-center h-full z-50">
            <div className="flex flex-row absolute left-4 justify-center">
                <button onClick={toggleSidebar} className="bg-black bg-opacity-10">
                    {!isSidebarOpen ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" class="size-8">
                        <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>}
                </button>
            </div>
            <div className="text-lg font-bold mx-auto h-full">
                <Link to="/">デ。 ~地球の電波祭について~</Link>
            </div>
        </header>
    )
}