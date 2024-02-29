import { Link } from 'react-scroll';
import '../css/Cover.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Cover = () => {
    const txt = "HAEUN PORTFOLIO"
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setText(text+ txt[count]);
            setCount(count +1);
        }, 200);
        if(count === txt.length){
            clearInterval(interval);
        }
        return() => clearInterval(interval)
    })
    
    return (
        <div className="Cover">
             <div className='titlecover'>
                <p className="subtitle1">Frontend - Developer</p>
                <div className="title_background">
                    <div className="title_line">
                        <p className="title">
                           {text}
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

