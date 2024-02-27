import { Link } from 'react-scroll';
import { useState } from 'react';
import '../css/Content.css';
import styled from 'styled-components';


const NavigateBar = () => {
    const [activeButton, setActiveButton] = useState('');
    return (
        <Nav>
            <div>  
                <Link to="Profile" spy={true} smooth={true} offset={-100} className={activeButton === 'home' ? 'active' : ''}>
                <span className="Btn_txt">Home</span>
                </Link>
                <br />
                <Link to="Project" spy={true} smooth={true} offset={-100}
                className={activeButton === 'project' ? 'active' : ''}>
                <span className="Btn_txt">Project</span>
                </Link>
                <br />
                <Link to="Contact" spy={true} smooth={true} offset={-50} className={activeButton === 'contact' ? 'active' : ''}>
                <span className="Btn_txt">Contact</span>
                </Link>
                <br />
            </div>
        </Nav>
    );
}
export default NavigateBar;

const Nav = styled.div`
  position: sticky;
  div {
    text-align: center;
    display: flex;
    padding: 30px;
    background-color: #333;

  }
  .Btn_txt {
    cursor: pointer;
    font-size: 20px;
    font-family: "Gowun Batang";
    color: #FFE697;
    opacity: 0.5;
    margin-right: 20px;
  }
  .active {
    .Btn_txt {
      opacity: 1;
    }
  }
}
  @media screen and (min-width : 1024px){
    width: 70%;
    position: sticky;
    top: 100px;
    z-index: 100;
    div{
        padding: 0;
        text-align: center;
        flex-direction: column; 
    }
    .Btn_txt{
        font-size: 25px;
        line-height: 2em;
    }
  }
`;

