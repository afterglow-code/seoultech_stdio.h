import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";


const Router =() => {

    const basename = process.env.NODE_ENV === 'production' ? '/seoultech_stdio.h' : '';
    return(
        <BrowserRouter basename={basename}>
            <Routes>
                <Route exact path="/" element ={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;

{/* 
    import Detail from "../pages/Detail.jsx";
    import Achive from "../pages/Achive.jsx";

    <Route path="/detail" element ={<Detail/>}/>
    <Route path="/achive" element ={<Achive/>}/> 
*/}