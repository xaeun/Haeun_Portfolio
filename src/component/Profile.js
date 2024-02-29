import '../css/Content.css';
import Skill from './Skill';

const Profile = () => {
    return (
        <div id='Profile'  className='Profile'>
            <div className="introduce"> 
                <div className='introimg'> 
                    <img src="../Img/haeun.jpg"/>
                </div>
                <div className='introtxt'>
                    <p>박하은</p>
                    <p>1997.09.10</p>
                    <p className='job'>Frontend - Developer</p>
                    <p className='myintro'> 
                        상상하는 아이디어를 배운 기술로 구현해 나가는 과정이 즐겁습니다.<br />
                        아직 배울 것이 더 많지만, 그만큼 더 성장할 저의 모습이 기대됩니다.<br />
                        새로운 도전을 두려워하지 않는 프론트엔드 개발자가 되겠습니다.
                    </p>
                </div>
            </div>
            <Skill />
        </div>
    );
};

export default Profile;