import React, {useState, useRef, useEffect} from "react";
import {Link} from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
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
    const isPc = useMediaQuery({ minWidth: 768 });
    const pcHomeRef = useRef(null);
    const mobHomeRef = useRef(null);
    const alumniRef = useRef(null);
    const aboutUsRef = useRef(null);
    const faqRef = useRef(null);
    const achieveRef = useRef(null);

    const [homeRef, setHomeRef] = useState(pcHomeRef);
    useEffect(() => {
        // 화면 크기 변경될 때마다 ref 변경
        setHomeRef(isPc ? pcHomeRef : mobHomeRef);
    }, [isPc]);

    const AutoText = ({ text }) => {
        return (
            <>
                {text.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </>
        );
    };

    return(
        <div className="Home">
            <PC>
                <div className="Home-PC">
                    <Navbar refs={{ homeRef, alumniRef, aboutUsRef, faqRef, achieveRef }}/>
                    {/* Land */}
                    <div ref={pcHomeRef} className="Land">
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
                                        <AutoText text={ac.name} />
                                    </div>
                                    <div className="pc-tile-sub">
                                        <AutoText text={ac.prize} />
                                    </div>
                                </SwiperSlide>
                            ))}

                            <div className="pc-button">
                                <div className="custom-prev">
                                    <img className="pc-b_size" src={`${process.env.PUBLIC_URL}/arrow-back-fill.svg`} alt="Previous" />
                                </div>
                                <div className="custom-next">
                                    <img className="pc-b_size" src={`${process.env.PUBLIC_URL}/arrow-right-fill.svg`} alt="Next" />
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

                    <Footer refs={{ homeRef, alumniRef, aboutUsRef, faqRef, achieveRef }}/>
                </div>
            </PC>

            {/* Mobile 시작입니다 */}
            <Mobile>
                <div className="Home-Mob">
                    <Navbar refs={{ homeRef, alumniRef, aboutUsRef, faqRef, achieveRef }}/>
                    {/* 홈 */}
                    <div className="Mob-Main" ref={mobHomeRef}>
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

                    {/* Home-2 */}
                    <div className="Mobsub">
                        <div class="logo">
                            <img src={`${process.env.PUBLIC_URL}/logo.png`}/>
                        </div>

                        <div class="intro">
                            <span>자율적인 참여</span>로 운영되고
                            <br />구성원 <span>모두 함께 성장</span>하는 것을 목표로 합니다.
                        </div>

                        <div class="first">
                            <img src={`${process.env.PUBLIC_URL}/map.svg`}/>
                            <br/><span>다양한 활동</span>
                            <br/>장학금 갈라잡이, 진로설계 갈라잡이, Mt 등
                            <br/>다양한 친목행사와 정보 나눔을 진행합니다.
                        </div>

                        <div class="second">
                            <img src={`${process.env.PUBLIC_URL}/cal.svg`}/>
                            <br/><span>전공 스터디</span>
                            <br/>하나보다는 둘, 둘보다는 셋!
                            <br/>어려운 전공을 함께 공부하는
                            <br/>전공 스터디를 진행합니다.
                        </div>

                        <div class="third">
                            <img src={`${process.env.PUBLIC_URL}/car.svg`}/>
                            <br/><span>다양한 프로젝트</span>
                            <br/>경진대회, 공모전, 동아리 내부 프로젝트 등
                            <br/>다양한 활동을 통해 경험을 만들어갑니다.
                        </div>
                    </div>

                    {/* About us */}           
                    <div class="about-us">
                        <div class="us-textwapper">
                            <div class="us-main">
                                stdio.h 프로그램
                            </div>
                        
                            <div class="us-box1">
                                <span>장학금, 진로설계 길라잡이</span>
                                <div class="box-text">
                                    <br/>장학금 길라잡이는
                                    <br/>복잡한 장학선발 절차를 안내하고
                                    <br/>장학선발 지원을 위한 자기소개서, 장학금 수혜 후기 등을 공유합니다.
                                    <br/><br/>진로설계 길라잡이는
                                    <br/>다양한 진로들의 소개와 준비 방법들을 공유합니다.
                                </div>
                            </div> 

                            <div class="us-box2">
                                <span>전공, 기술 스터디</span>
                                <div class="box-text">
                                    <br/>전공 스터디에서는
                                    <br/>공학수학, 신호 및 시스템, 전력전자, 딥러닝 등
                                    <br/>전공 관련 소규모 스터디를 통해 전공 이해도를 놉힙니다.
                                    <br/><br/>기술 스터디에서는
                                    <br/>HW/FW, SW, ML/DL 등 각 직무별로 요구되는 기술의 스터디를 진행합니다.
                                </div>
                            </div> 

                            <div class="us-box3">
                                <span>아두이노, 라즈베리파이 실습</span>
                                <div class="box-text">
                                    <br/>아두이노, 라즈베리파이 등을 이용해
                                    <br/>IOT제어, 모터 제어 등 다양한 실습을 진행합니다.
                                </div>
                            </div> 

                            <div class="us-box4">
                                <span>공모전, 경진대회</span>
                                <div class="box-text">
                                    <br/>공모전, 경진대회를 통해 다양한 실전 경험을 얻고자 합니다.
                                    <br/>stdio.h는 임베디드SW경진대회, 한이음 등
                                    <br/>다양한 공모전, 경진대회에 참여중입니다.
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
                                                <AutoText text={faq.question} />
                                            </div>
                                            <img src={`${process.env.PUBLIC_URL}/top.svg`} className={`Q-arrow ${openFAQ[index] ? '' : 'rotate'}`}/>
                                        </div>
                                        
                                        <div className={`A ${openFAQ[index] ? 'open' : 'close'}`}>
                                            <div className="A-text">
                                                <AutoText text={faq.answer} />
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
                                        <AutoText text={ac.name} />
                                    </div>
                                    <div className="tile-sub">
                                        <AutoText text={ac.prize} />
                                    </div>
                                </SwiperSlide>
                            ))}

                            <div className="button">
                                <div className="custom-prev">
                                    <img className="b_size" src={`${process.env.PUBLIC_URL}/arrow-back-fill.svg`} alt="Previous" />
                                </div>
                                <div className="custom-next">
                                    <img className="b_size" src={`${process.env.PUBLIC_URL}/arrow-right-fill.svg`} alt="Next" />
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

                    <Footer refs={{ homeRef, alumniRef, aboutUsRef, faqRef, achieveRef }}/>

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
