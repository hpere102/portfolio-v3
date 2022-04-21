
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
  </main>
  
    );
  };

export default About;