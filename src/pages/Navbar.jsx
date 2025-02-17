import React, { Children } from "react";
import {Link} from 'react-router-dom';
import {Mobile, PC} from './Mediaquery.jsx';
import './Navbar.scss';
import '../fonts/pretendardvariable.css';

function Navbar(){

    return(
        <div className="Nav">
            <PC>
                <div className="Nav-PC">
                    <Link to = "/"><img src="./logo.png" className="logo"></img></Link>
                    <div className="Link-wrapper">
                        <Link to="/" className="Link-text">Home</Link>
                        <Link to="/" className="Link-text">Alumni</Link>
                        <Link to="/" className="Link-text">About Us</Link>
                        <Link to="/" className="Link-text">Q&A</Link>
                        <Link to="/Achieve" className="Link-text">Achieve</Link>
                        <Link to="/" className="Link-text">지원하기</Link>
                    </div>
                </div>
            </PC>

            <Mobile>
                <div className="Nav-Mobile">
                    <Link to = "/"><img src="./logo.png" className="Mob-logo"></img></Link>
                    <Link to="/" className="Mob-link-wrap">
                        <div className="Mob-text">지원하기</div>
                        <img src="./Vector.svg" className="Mob-logo"></img>
                    </Link>
                </div>
            </Mobile>
        </div>
    )
}
export default Navbar;