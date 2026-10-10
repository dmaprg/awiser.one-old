import { forumUrl } from '../data/site'

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <img
          src="/images/LogoAwiserEduPub_SML.png"
          alt="Awiser is an Education and Publishing company located in Seattle, WA"
        />
        <div>
          <h2>About Awiser</h2>
          <p>
            Based in Seattle, Washington, Awiser is an innovative startup that specializes in
            publishing books and providing education courses aimed at enhancing your cognitive
            abilities, communication skills, and overall behavior through a unique and creative
            methodology. Our digital publications and courses are designed to help you gain a
            competitive edge and develop a set of exceptional skills that will enable you to thrive
            in the era of Artificial Intelligence.
          </p>
          <p>
            Our meticulously crafted offerings will provide you with a transformative experience
            that will equip you with the necessary mindset and skills to succeed in the current AI
            era. With our help, you can unlock your full potential, gain a competitive advantage,
            and embrace a bright future filled with wealth and meaningful relationships.
          </p>
          <p>
            At Awiser, we are committed to empowering you and helping you become the best version of
            yourself. Take the first step towards your journey to success today and join our
            community of like-minded individuals who are driven to achieve greatness.
          </p>
          <a className="btn" href={forumUrl}>
            Join the Community
          </a>
        </div>
      </div>
    </section>
  )
}
