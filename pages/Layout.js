import React from "react";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import landing from "./landing";
export default function Layout({children}){
    const router = useRouter();
    if(router.pathname != "/" )
    return (
        <div>
         <Navbar />
   <landing/>
         {children}
         <Footer />
         </div>
    )
    else {
        return (
            <div>
   <Navbar/>
         {children}
         </div>
        )
    }
}