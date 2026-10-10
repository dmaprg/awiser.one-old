import { Link } from 'react-router-dom'
import { forumUrl } from '../data/site'

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-grid">
        <div>
          <h2>
            <a href="mailto:admin@awiser.one">Contact AWISER</a>
          </h2>
          <p>If you need more from us, please use the contact email.</p>
          <p>
            Email: <a href="mailto:admin@awiser.one">Admin@awiser.one</a>
          </p>
          <p>City: Seattle, WA</p>
        </div>
        <div>
          <h3>Social Media</h3>
          <div className="social-row" aria-label="Social media">
            <span title="LinkedIn" aria-hidden="true">
              in
            </span>
            <span title="Facebook" aria-hidden="true">
              f
            </span>
            <span title="X" aria-hidden="true">
              𝕏
            </span>
            <span title="YouTube" aria-hidden="true">
              ▶
            </span>
          </div>
          <h3>Navigation</h3>
          <ul className="footer-nav">
            <li>
              <a href={forumUrl}>Forum</a>
            </li>
            <li>
              <Link to="/#intro">Home</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Forum & Community</h3>
          <p>
            One book or even one course gives you the main and essential knowledge and skills, but
            it's not lively with any new emerged things and situations around us. Although for some
            of you can connect what you leanred with anything - as the digital products are not time
            contrained but overall for all situations and all time.
          </p>
          <p>
            To refresh waht you learned from our digital products, there's forum helps you refresh
            with new lively cases and gain more insight or interest ideas with people like you and
            everywhere in the world.
          </p>
          <a className="footer-button" href={forumUrl}>
            Visit -&gt; Forum
          </a>
        </div>
      </div>
    </footer>
  )
}
