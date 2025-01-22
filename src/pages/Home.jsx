import React from "react";
import {Link} from 'react-router-dom';
import './Home.scss';
import {Mobile, PC} from './Mediaquery.jsx';
import Navbar from "./Navbar.jsx";

function Home(){
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