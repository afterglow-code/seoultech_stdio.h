import React, {useState, useRef} from "react";
import {Link} from 'react-router-dom';
import './Home.scss';

import {Mobile, PC} from './Mediaquery.jsx';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { FAQData, AlumniData, AchieveData } from "./data.js";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Home(){
    {/* FAQ open state */}
    const [openFAQ, setOpenFAQ] = useState(Array(FAQData.length).fill(true));
    const toggleFAQ = (index) =>{
        setOpenFAQ(prev => {
            const newFAQ = [...prev];
            newFAQ[index] = !newFAQ[index];
            return newFAQ;
        });
    };

    const homeRef = useRef(null);
    const alumniRef = useRef(null);
    const aboutUsRef = useRef(null);
    const faqRef = useRef(null);
    const achieveRef = useRef(null);

    return(
        <div className="Home">
            <PC>
                <div className="Home-PC">
                    <Navbar refs={{ homeRef, alumniRef, aboutUsRef, faqRef, achieveRef }}/>
                    {/* Land */}
                    <div ref={homeRef} className="Land">
                        <div>1번, 2번</div>
                    </div>
                    {/* About us 시작입니다 */}

                    {/* q&a 시작입니다 */}

                    {/* Achieve 시작입니다 */}
                    <div ref={achieveRef} className="PC-Achieve">
                        <div className="Head">stdio.h의 기록</div>
                        <div className="Head-sub">동아리원들이 함께 협동해서 이룬 성과들 입니다</div>

                        <Swiper
                            // install Swiper modules
                            className="PC-swiper"
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={'auto'}
                            navigation = {{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            
                            {AchieveData.map((ac) => (
                                <SwiperSlide className="pc-tile">
                                    <div className="pc-tile-head">
                                        {ac.name.split("\n").map((line, idx) => (
                                            <React.Fragment key={idx}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className="pc-tile-sub">
                                        {ac.prize.split("\n").map((line, idx) => (
                                            <React.Fragment key={idx}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}

                            <div className="pc-button">
                                <div className="custom-prev">
                                    <img className="pc-b_size" src="./arrow-back-fill.svg" alt="Previous" />
                                </div>
                                <div className="custom-next">
                                    <img className="pc-b_size" src="./arrow-right-fill.svg" alt="Next" />
                                </div>
                            </div>
                        </Swiper>
                    </div>
                    {/* Alumni 시작입니다 */}
                    <div ref={alumniRef} className="pc-Alumni">
                            <div className="pc-Alumni-head">Alumni</div>

                            <div className="pc-Alumni-container">

                                <div className="pc-Alumni-info-head">
                                                <div className="te">Name</div>
                                                <div className="te">Contact</div>
                                                <div className="te">Major</div>
                                                <div className="te">Graduation</div>
                                            </div>

                                {AlumniData.map((al) =>(
                                    <div className="pc-Alumni-info">
                                        <div className="pc-Alumni-info-text">{al.name}</div>
                                        <div className="pc-Alumni-info-text">{al.contact}</div>
                                        <div className="pc-Alumni-info-text">{al.major}</div>
                                        <div className="pc-Alumni-info-text">{al.year}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    <Footer/>
                </div>
            </PC>
            
            <Mobile>
                <div className="Home-Mob">
                    <Navbar/>
                    {/* 홈 */}
                    <div className="Mob-Main">
                        <div className="Mob-Main-inline">
                            <div className="Mob-text-wrapper">
                                    <div className="Mob-head-sub">서울과학기술대학교</div>
                                    <div className="Mob-head-wrapper">
                                        <div className="Mob-head-text">스마트ICT융합공학과</div>
                                        <div className="Mob-head-text">학술동아리</div>
                                        <div className="Mob-head-text">stdio.h</div>
                                    </div>
                                    <div className="Mob-sub">stdio.h는 스마트ICT융합공학과 유일 학술동아리 입니다.<br />
                                                            장학금 안내, 전공 스터디, 아두이노 실습 등 다양한 프로그램을 통해<br />
                                                            동아리원과 함께 성장하는 동아리 입니다.
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* FAQ 시작입니다 */}
                    <div className="Mob-FAQ">
                        <div className="Mob-FAQ-inline">
                            <div className="FAQ-title">
                                <div className="FAQ-title-head">여러분을 위한 Q&A</div>
                                <div className="FAQ-title-sub">여러분이 동아리에 지원하시기 전 자주묻는 질문을 모아봤습니다</div>
                            </div>

                            <div className="FAQ-list">
                                {FAQData.map((faq, index) => (
                                    <div className="FAQ-item" key={index}>
                                        <div className="Q" onClick={() => toggleFAQ(index)}>
                                            <div className="Q-text">
                                                {faq.question.split("\n").map((line, idx) => (
                                                    <React.Fragment key={idx}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                            <img src="./top.svg" className={`Q-arrow ${openFAQ[index] ? '' : 'rotate'}`}/>
                                        </div>
                                        
                                        <div className={`A ${openFAQ[index] ? 'open' : 'close'}`}>
                                            <div className="A-text">
                                                {faq.answer.split("\n").map((line, idx) => (
                                                        <React.Fragment key={idx}>
                                                            {line}
                                                            <br />
                                                        </React.Fragment>
                                                ))}
                                            </div>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
        
                    {/* Achieve 시작입니다 */}
                    <div className="Achieve">
                        <div className="Achieve-Head">stdio.h의 기록</div>
                        <div className="Achieve-Sub">동아리원들이 함께 협동해서 이룬 성과들 입니다</div>

                        <Swiper
                            // install Swiper modules
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={'auto'}
                            navigation = {{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            
                            {AchieveData.map((ac) => (
                                <SwiperSlide className="tile">
                                    <div className="tile-head">
                                        {ac.name.split("\n").map((line, idx) => (
                                            <React.Fragment key={idx}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className="tile-sub">
                                        {ac.prize.split("\n").map((line, idx) => (
                                            <React.Fragment key={idx}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}

                            <div className="button">
                                <div className="custom-prev">
                                    <img className="b_size" src="./arrow-back-fill.svg" alt="Previous" />
                                </div>
                                <div className="custom-next">
                                    <img className="b_size" src="./arrow-right-fill.svg" alt="Next" />
                                </div>
                            </div>
                        </Swiper>
                    </div>
                    {/* 졸업생 시작입니다 */}
                    <div className="Alumni">
                        <div className="Alumni-head">Alumni</div>

                        <div className="Alumni-container">
                            <div className="Alumni-info-head">
                                <div className="te">Name</div>
                                <div className="te">Contact</div>
                                <div className="te">Graduation</div>
                            </div>

                            {AlumniData.map((al) =>(
                                <div className="Alumni-info">
                                    <div className="Alumni-info-text">{al.name}</div>
                                    <div className="Alumni-info-text">{al.contact}</div>
                                    <div className="Alumni-info-text">{al.year}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Footer/>

                </div>                
            </Mobile>
        </div>
        
    )
}

export default Home;

{/* 
    1. 반응형 웹은 usemediaquery를 통해 구현합니다.
     따라서 <Moblie></Mobile> 처럼 태그를 구성하는것 만으로도 반응형으로 작동하게 해뒀습니다.
     관련 설정은 Mediaquery.jsx 에 있습니다. 
     예시는 pages/Navbar.jsx를 참고하세요.
    
    2. shared/Router.js 에는 페이지 라우터 속성이 들어있습니다. 거기서 경로를 지정할 수 있습니다.(Link 활용)

    3. pages에는 우리가 표현하고 싶은 페이지들이 모여있습니다.

    4. img, png 등 asset는 public에 넣어서 관리하시면 됩니다.
    
*/}
