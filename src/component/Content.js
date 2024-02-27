import NavigateBar from './NavigateBar';
import Profile from './Profile';
import Project from './Project';

import Contact from './Contact';
import '../css/Content.css';


const Content = () => {
    return (
        <div className="Content">
            <div className='navitgate_area'>
                <NavigateBar />
            </div>
            <div className='present_area'>
                <Profile/>
                <Project />
                <Contact />
            </div>
          
        </div>
    )
}

export default Content;