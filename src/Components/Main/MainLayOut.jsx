import { Outlet } from "react-router-dom";
import Navbar from "../LayOut/Navbar";
import Footer from "../LayOut/Footer";


const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className="max-w-7xl mx-auto min-h-screen">
           <Outlet></Outlet>
           </div>
           


         <div className=" max-w-7xl mx-auto">
         <Footer></Footer>
         </div>
        </div>
    );
};

export default MainLayOut;