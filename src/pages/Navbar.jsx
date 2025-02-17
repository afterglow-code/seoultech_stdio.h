import React, { Children } from "react";
import {Link} from 'react-router-dom';
import {Mobile, PC} from './Mediaquery.jsx';
import './Navbar.scss';
import '../fonts/pretendardvariable.css';

function Navbar({ refs }){
    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        });
    };
    return(
        <div className="Nav">
            <PC>
                <div className="Nav-PC">
                    <Link to = "/" onClick={() => scrollToRef(refs.homeRef)}><img src="./logo.png" className="logo"></img></Link>
                    <div className="Link-wrapper">
                        <Link to="/" className="Link-text" onClick={() => scrollToRef(refs.homeRef)}>Home</Link>
                        <Link to="/" className="Link-text" onClick={() => scrollToRef(refs.alumniRef)}>Alumni</Link>
                        <Link to="/" className="Link-text" onClick={() => scrollToRef(refs.aboutUsRef)}>About Us</Link>
                        <Link to="/" className="Link-text" onClick={() => scrollToRef(refs.faqRef)}>Q&A</Link>
                        <Link to="/" className="Link-text" onClick={() => scrollToRef(refs.achieveRef)}>Achieve</Link>
                        <Link to="/" className="Link-text" onClick={() => scrollToRef(refs.homeRef)}>지원하기</Link>
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