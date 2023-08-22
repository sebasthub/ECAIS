import React from "react";
import Navbar from "./global/navbar";

export default function Layout({children,data}: {children: React.ReactNode,data: any}){
    return (
        <>
        <Navbar data = {data}></Navbar>
        <div className="h-20"></div>
        {children}
        </>
    )

}