import React, { Children } from "react";
import {Link} from 'react-router-dom';
import {Mobile, PC} from './Mediaquery.jsx';
import './Navbar.scss';

function Navbar(){
    return(
        <div>
            <PC>
                <div className="Nav-PC">
                    <Link to = "/"><img src="./logo.png" className="logo"></img></Link>
                    <div className="Link-wrapper">
                        <Link to="/" className="Link-text">Home</Link>
                        <Link to="/" className="Link-text">Alumni</Link>
                        <Link to="/" className="Link-text">About Us</Link>
                        <Link to="/" className="Link-text">Q&A</Link>
                        <Link to="/" className="Link-text">Achieve</Link>
                        <Link to="/" className="Link-text">지원하기</Link>
                    </div>
                </div>
            </PC>

            <Mobile>
                
            </Mobile>
        </div>
    )
}
export default Navbar;