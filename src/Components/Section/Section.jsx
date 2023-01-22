import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import Welcome from '../Welcome/Welcome';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Proyects from '../Proyects/Proyects';
import ContactForm from '../ContactForm/ContactForm';
import Logo from '../../images/MiLogo.jpg';
import s from './Section.module.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div className={s.background}>
          <nav className={s.navbar}>
            <div className={s.container}>
              <img className={s.logo} src={Logo} alt='Nadia Olivera Full Stack Developer'/>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className={s.linkdiv}>
                  <li className={s.link}><Link activeClass="active" className="welcome" to="welcome" spy={true} smooth={true} duration={500} >Bienvenidos!</Link></li>
                  <li className={s.link}><Link activeClass="active" className="aboutme" to="aboutme" spy={true} smooth={true} duration={500}>Sobre mí</Link></li>
                  <li className={s.link}><Link activeClass="active" className="skills" to="skills" spy={true} smooth={true} duration={500} >Skills</Link></li>
                  <li className={s.link}><Link activeClass="active" className="proyects" to="proyects" spy={true} smooth={true} duration={500}>Proyectos</Link></li>
                  <li className={s.contact}><Link activeClass="active" className="contactform" to="contactform" spy={true} smooth={true} duration={500}>Contáctame</Link></li>
                 
                
                  
                </ul>
              </div>
            </div>
          </nav>

          <Element name="welcome" className="element" >
           <Welcome />
        </Element>

          <Element name="aboutme" className="element">
           <AboutMe />
        </Element>

          <Element name="skills" className="element">
            <Skills />
        </Element>

          <Element name="proyects" className="element">
            <Proyects />
        </Element>

          <Element name="contactform" className="element">
            <ContactForm />
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>
        
          <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '200px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>
          </Element>

          <Element className="element" id="scroll-container" style={{
            position: 'relative',
            height: '200px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>
          </Element>

         
      </div>
    );
  }
};
  export default Section;