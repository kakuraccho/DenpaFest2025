import * as React from "react"
import Footer from "./footer.js";
import Header from "./header";
import SideBar from "./sidebar";
import { Helmet } from "react-helmet";
import "../styles/global.css"

export default function Body({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Helmet>
                <title>第53回 電波祭</title>
            </Helmet>

            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

            <div className="flex-grow flex relative">
                <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-grow bg-white">
                    {children}
                </div>
            </div>

            <Footer/>
        </div>
    )
}