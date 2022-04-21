import { Link } from 'react-router-dom';
import './about.css'
import headshot from '../../images/headshot.png'

const About = () => {

 
    return (
      <main>
       <div className="intro">Hello, I'm a full-stack developer based in Miami!</div>
       <div className="bio-title">
         <div className="name-title">
           <p className="name">Hector Perez</p>
           <p className="title">Developer (Fullstack)</p>
         </div>
         <div className="picture-cont">
           <img alt="headshot-of-me" className="avi-img" src={headshot} />
         </div>
       </div>
       <div className="about-cont">
         <p className="about-title">About Me</p>
         <p>I'm a full-stack developer based in Miami Lakes, Florida with a passion for both front-end and back-end engineering.
            When I'm not online you can most likely find me at the gym or playing video games. If you want to see more, check out my portfolio. </p>
         <Link className="work-link" to="/work">My portfolio ›</Link>
       </div>
  </main>
  
    );
  };

export default About;