import logo from '../../assets/icons/logo.svg'
/*
import { pageLinks, socialLinks } from './data/data'
-> before we make the <ul></ul> its own component
*/

import { socialLinks } from './data/data'
import PageLinks from './PageLinks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose -->*/}
        <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        {/*<ul className="nav-links" id="nav-links">
          {pageLinks.map(({id, href, text}) => {
            return (
              <li key ={ id }>
                <a href={href} className="nav-link">
                  {' '}
                  {text}{' '}
                </a>
              </li>
            )
          })}
        </ul>*/}

        <ul className="nav-icons">
          {socialLinks.map(({ id, href, icon}) => {
            return (
              <li key={id}>
                <a 
                  href={href} 
                  target="_blank" 
                  className="nav-icon"
                  rel='noreferrer'
                >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;