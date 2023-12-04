import Leftmenu from './Leftmenu.jsx'
import Navbar from './Navbar.jsx'
import BlogsList from './Maincontent.jsx'
import Rightmenu from './rightmenu.jsx'

export default function HomePage(){
    return(
        <>
            <div className="top-nav-outer-container">
                <Navbar />
            </div>
            <div className="main-page-outer-container">
                <div className="main-page-container">
                <div className="left-panel-container">
                    <Leftmenu></Leftmenu>
                </div>
                <BlogsList />
                <Rightmenu />
                </div>
            </div>
        </>
    )
}