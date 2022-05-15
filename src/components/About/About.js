import './About.css'
import AboutCard from '../UI/Cards/AboutCard/AboutCard'


const About = (props) => (
  <section className='About__about'>
    <h1>Обо мне</h1>
    <p>Занимаюсь веб-разработкой 2 года. Разбираюсь в большинстве актуальных технологий.</p>

    <div className="About__cards">
      {
        props.items.map((el, i) => {
          return <AboutCard key={i} icon={el.icon} text={el.title} total={el.total} />
        })
      }
    </div>

  </section>
)

export default About
