import './About.css'
import AboutCard from '../UI/Cards/AboutCard/AboutCard'
import {ReactComponent as Books} from '../UI/Icons/books.svg'
import {ReactComponent as Fire} from '../UI/Icons/fire.svg'
import {ReactComponent as Home} from '../UI/Icons/home.svg'

const About = () => (
  <section className='About__about'>
    <h1>About</h1>
    <p>Web developer, with extensive knowledge and years of experience, working in web <br/> technologies and UI/UX design, delivering quality work.</p>

    <div className="About__card">
      <AboutCard  text={'Years\n' + 'experience'} total={20} icon={<Fire />}/>
      <AboutCard text={'Completed\n' + 'projects'} total={6} icon={<Books />}/>
      <AboutCard text={'Companies\n' + 'worked'} total={4} icon={<Home />}/>
    </div>

  </section>
)

export default About
