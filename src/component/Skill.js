import '../css/Cover.css';

const Skill = () => {
    return(
        <div className="Skill">
            <h3>
                Skill
            </h3>
            <div>
                <p className='s_html5'> <img src="../Img/Html.png"/>HTML5</p> 
                <p className='s_css3'> <img src="../Img/CSS.png"/>CSS3</p>
            </div>
            <div>
                <p className='s_javaScript'> <img src="../Img/Javascript.png"/>JavaScript</p> 
                <p className='s_jquery'> <img src="../Img/Jquery.png"/>jQuery</p>
                <p className='s_reactjs'> <img src="../Img/Reactjs.png"/>React.js</p>
                <p className='s_typescript'> <img src="../Img/Typescript.png"/>TypeScript</p>
                <p className='s_nodejs'> <img src="../Img/Nodejs.png"/>Node.js</p>
            </div>
            <div>
            <p className='s_styledcomponent'> <img src="../Img/Styledconpoment.png"/>Styled-Component</p>
            <p className='s_figma'> <img src="../Img/Figma.png"/>Figma</p>
            <p className='s_visualstudiocode'> <img src="../Img/Visualstudiocode.png"/>Visual Studio Code</p>
            </div>
            <div>
            <p className='s_github'> <img src="../Img/Github.png"/>GitHub</p>
            </div>
        </div>
    )
}

export default Skill;