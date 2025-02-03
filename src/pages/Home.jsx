import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Home.scss';

import {Mobile, PC} from './Mediaquery.jsx';
import Navbar from "./Navbar.jsx";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Home(){

    const FAQData = [
        { question: "동아리 가입 방법은?", answer: "동아리 지원하기를 통해 지원하시면 연락드리겠습니다." },
        { question: "동아리 회비는?", answer: "동아리 회비는 없습니다.\n다만, 대회 참여, 자재 구입 등 불가피한 경우 활동에 참여한 인원들과 금액을 분담할 수 있습니다." },
        { question: "경험이 없어도 프로젝트(대회) 참여가 가능한가요?", answer: "그럼요! stdio.h의 모든 활동은 학년, 경험 등에 제한을 두지 않습니다.\n하고싶다는 의지 하나면 충분합니다!" },
        { question: "지원 자격은?", answer: "스마트ICT융합공학과 또는 전자IT미디어공학과(미디어트랙) 학생(학년무관)이면 누구나 가능합니다!" },
        { question: "활동 소식은 어디서?", answer: "동아리의 활동 소식은 이 페이지 Achive 탭이나 네이버 카페를 참조해주세요." }
    ];
    const [openFAQ, setOpenFAQ] = useState(Array(FAQData.length).fill(true));
    const toggleFAQ = (index) =>{
        setOpenFAQ(prev => {
            const newFAQ = [...prev];
            newFAQ[index] = !newFAQ[index];
            return newFAQ;
        });
    };

    return(
        <div className="Home">
            <PC>
                <div className="Home-PC">
                    <Navbar/>
                    <div className="PC-Main">
                        개발 시작하시면 됩니다.
                    </div>
                </div>
            </PC>
            
            <Mobile>
                <div className="Home-Mob">
                    <Navbar/>
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
                                            <div className="Q-text">{faq.question}</div>
                                            <img src="./top.svg" className={`Q-arrow ${openFAQ[index] ? '' : 'rotate'}`}/>
                                        </div>
                                        {openFAQ[index] && (
                                            <div className="A">
                                                <div className="A-text">{faq.answer}</div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

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
                            <SwiperSlide className="tile">
                                <div className="tile-head">2023 RE-UP Cycle Thon
                                (GREEN TECH MAKER)</div>
                                <div className="tile-sub">최우수상 수상</div>
                            </SwiperSlide>

                            <SwiperSlide className="tile">
                                <div className="tile-head">2023 RE-UP Cycle Thon
                                (GREEN TECH MAKER)</div>
                                <div className="tile-sub">최우수상 수상</div>
                            </SwiperSlide>

                            <SwiperSlide className="tile">
                                <div className="tile-head">2023 RE-UP Cycle Thon
                                    (GREEN TECH MAKER)</div>
                                <div className="tile-sub">최우수상 수상</div>
                            </SwiperSlide>

                            <SwiperSlide className="tile">
                                <div className="tile-head">2023 RE-UP Cycle Thon
                                (GREEN TECH MAKER)</div>
                                <div className="tile-sub">최우수상 수상</div>
                            </SwiperSlide>
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

                    <div className="Alumni">
                        <div className="Alumni-head">Alumni</div>

                        <div className="Alumni-container">
                            <div className="Alumni-sort">
                                <div className="Alumni-name">Name</div>
                                <div className="Alumni-contact">Contact</div>
                                <div className="Alumni-graduate">Graduation</div>
                            </div>
                            <div className="Alumni-info">
                                <div className="Alumni-info-text">김철수</div>
                                <div className="Alumni-info-text">abc@gmail.com</div>
                                <div className="Alumni-info-text">25.02</div>
                            </div>

                            <div className="Alumni-info">
                                <div className="Alumni-info-text">김철수</div>
                                <div className="Alumni-info-text">abc@gmail.com</div>
                                <div className="Alumni-info-text">25.02</div>
                            </div>

                            <div className="Alumni-info">
                                <div className="Alumni-info-text">김철수</div>
                                <div className="Alumni-info-text">abc@gmail.com</div>
                                <div className="Alumni-info-text">25.02</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Mob-footer"></div>
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