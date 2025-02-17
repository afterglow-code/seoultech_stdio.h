import React from "react";
import {Link,} from 'react-router-dom';
import {Mobile, PC} from './Mediaquery.jsx';
import './Footer.scss';

function Footer(){

    return(
        <div className="Footer">
            <PC>
                <div className= "PC-footer">
                    <div className="top">
                        <div className="pc-left-box">
                            <div className="logo-text">stdio.h</div>
                            <div className="contact">회장 장세영<br/>010-7352-2030</div>
                        </div>
                        
                        <div className="pc-right-box">
                            <div className="about">About</div>
                            <div className="list">
                                <div className="list-text">Home</div>
                                <div className="list-text">Alumni</div>
                                <div className="list-text">About Us</div>
                                <div className="list-text">Q&A</div>
                                <div className="list-text">Achieve</div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="noti">© 2025 stdio.h. All Right Reserved.</div>
                    </div>
                </div>
            </PC>

            <Mobile>
                <div className="Mob-footer">
                    <img src="./logo.png" className="Mob-footer-logo"></img>
                    <div className="Mob-box">
                        <div className="Mob-contact">회장 장세영<br/>010-7352-2030</div>
                        <div className="Mob-noti">© 2025 stdio.h. All Right Reserved.</div>
                    </div>
                </div>
            </Mobile>
        </div>
    )
}
export default Footer;

