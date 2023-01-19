/*import { pageLinks, socialLinks } from "./data/data"*/
import { socialLinks } from './data/data'
import PageLinks from './PageLinks'

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass='footer-links' itemClass='footer-link'/>
      { /*<ul className="footer-links">
        {pageLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text === 'tours' ? 'Featured' : text}
              </a>
            </li>
          )
        })}
      </ul>*/ }
      <ul className="footer-icons">
        {socialLinks.map(({ id, href, icon }) => {
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer