import Sidebar from "../components/Sidebar";
import useIsMobile from "../hooks/UseIsMobile";
import MobileSidebar from "../components/MobileSidebar";
import Navbar from "../components/Navbar";
const TrackLayout=( {children})=>{
    const isMobile = useIsMobile();
    return (
        <div className="page-container">
        <div className="global-content">     
                {isMobile ? '' : <Navbar />}

        <div className="dashboard-layout">
          
            {isMobile ? <MobileSidebar/> : <Sidebar />}

           
            <div className="content-area">
                {children}
                
            </div>
        </div>
        </div>   
    </div>

    );
}
export default TrackLayout;