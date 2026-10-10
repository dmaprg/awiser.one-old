import { forumUrl } from '../data/site'

export function Hero() {
  return (
    <section id="intro" className="hero">
      <div className="hero-top">
        <div className="hero-copy">
          <img
            className="tree-logo"
            src="/images/LogoAwiserOne_SML.png"
            alt="Awiser is an Education and Publishing company located in Seattle, WA"
          />
          <p>
            Transform Your Life with this creativeness Website Providing Thinking, Behavior, and
            Speech Models. These Models help you gain deep insight into things and behave, speak in
            an efficient and welcome way to gain career advantages, success and friends.
          </p>
          <a className="btn" href={forumUrl}>
            Go to Forum, be A Wiser One
          </a>
        </div>
        <img
          className="brain-art"
          src="/images/Cover1.png"
          alt="Thinking Models - Creativeness Model"
        />
      </div>
      <div className="hero-bottom">
        <img className="reader" src="/images/reader-man1.png" alt="To be A Wiser One" />
        <div className="hero-aside">
          <h2>
            To be A Wiser One
            <span>Gain Intelligence, Wealth and Friends</span>
          </h2>
          <div className="book-panel">
            <p>Book Introduced:</p>
            <p className="book-title">Thinking Models.</p>
            <p className="book-audience">
              For Business Owners &amp; White-collar Workers to thrive in Post Artificial
              Intelligence Era.
            </p>
            <p>
              Times change, styles change, tools change, but there're something never change, Human
              nature is eternal and hanged. Dale Carnegie's book{' '}
              <em>How To Win Friends and Influence People</em> shows those 'Rules' about human
              nature are never changed, so do those intelligent people think about the world and
              things, no matter it's a quills, fountain pen or a computer.
            </p>
            <p>
              But rarely did us learn those thinking methods in shool, even some inteligent people
              themselves might not realized that they used some thinking shortcut or method ensured
              they can handle challenges. But there are thinking patterns - By collecting most
              successful people with extraodinary wisdom like Philophers from Ancient Greece to
              today's Scientisets, Successful Businessman, Politicians and some entertainment
              celebrities, we concluded those thinking models which are contributed in to 12 Vidual
              Models to be easily used by any one who works with information or need to make
              decision based on information and data.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
