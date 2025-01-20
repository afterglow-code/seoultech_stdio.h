import React from "react";
import {Link} from 'react-router-dom';
import './Home.scss';
import {Mobile, PC} from './Mediaquery.jsx';
import Navbar from "./Navbar.jsx";

function Home(){
    return(
        <div>
            <PC>
                <div className="Home-PC">
                    <Navbar/>
                    개발 시작하시면 됩니다.
                </div>
            </PC>
            
            <Mobile>
                <div className="Home-Mob">
                    <Navbar/>
                    <div className="Mob-Main">
                        
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