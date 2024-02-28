import { Link } from 'react-scroll';
import '../css/Cover.css';

const Cover = () => {
    return (
        <div className="Cover">
             <div className='titlecover'>
                <p className="subtitle1">Frontend - Developer</p>
                <div className="title_background">
                    <div className="title_line">
                        <p className="title">
                            HAEUN<br />
                            PORTFOLIO
                        </p>
                    </div>
                </div>
                <p className="subtitle2">Frontend - Developer</p>
            </div> 



            <Link to="Profile" spy={true} smooth={true} offset={-100} >
                <p className="titledown"><img src="../Img/icon-pagedown.gif" /></p>
            </Link>
        </div>
    )
}

export default Cover;

