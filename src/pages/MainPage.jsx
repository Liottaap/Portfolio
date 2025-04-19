
import { RevealOnScroll } from '../components/hooks/animatedHook'
import {Header} from './Header'
import {About} from './About'
import {Works} from './Works'
import {Contact} from './Contact'
import { AboutSkills } from '../components/AboutSkills'
import ReactFullpage from '@fullpage/react-fullpage';
import'.././globals.css'


function MainPage() {
    return (
      <ReactFullpage
        scrollingSpeed={700}
        navigation={true}
        anchors={['inicio', 'proyectos', 'sobre-mi', 'habilidades', 'contacto']}
        sectionsColor={['#020617', '#eee', '#020617', '#020617', '#020617']}
  
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">

                <RevealOnScroll>
                  <Header />
                </RevealOnScroll>
              </div>
  
              <div className="section">
                <RevealOnScroll delay={100}>
                  <Works />
                </RevealOnScroll>
              </div>
  
              <div className="section">
                <RevealOnScroll delay={200}>
                  <About />
                </RevealOnScroll>
              </div>
  
              <div className="section">
                <RevealOnScroll delay={300}>
                  <AboutSkills />
                </RevealOnScroll>
              </div>
  
              <div className="section">
                <RevealOnScroll delay={400}>
                  <Contact />
                </RevealOnScroll>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
  
export default MainPage;

