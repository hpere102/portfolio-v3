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
         <h5 className="about-title">About Me</h5>
         <p className="bio-body">I'm a full-stack developer based in Miami Lakes, Florida with a passion for both front-end and back-end engineering.
            When I'm not online you can most likely find me at the gym or playing video games. If you want to see more, check out my portfolio. </p>
         <Link className="work-link" to="/work">My portfolio ›</Link>
         <div className="bio-body-cont">
            <h5 className="bio-body-title">Bio</h5>
            <div className="facts-cont">
            <div className="fact-cont">
            <p class="year">1996</p>
            <p className="facts"> Born, raised in Miami, Florida.</p>
            </div>
            <div className="fact-cont">
            <p class="year">2020</p>
            <p className="facts"> Graduates Florida International University with a Bachelors in International Business.</p>
            </div>
            <div className="fact-cont">
            <p class="year">2022</p>
            <p className="facts"> Graduates University of Miami Full Stack Development Bootcamp after 6 months..</p>
            </div>
            </div>
         </div>
       </div>
  </main>
  
    );
  };

export default About;