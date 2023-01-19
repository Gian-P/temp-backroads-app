import { pageLinks } from "./data/data"

const PageLinks= ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {(text === 'tours' && parentClass === 'footer-links')
                ? 'Featured'
                : text
              }
            </a>
          </li>
        )
      })}
    </ul>   
  )
}
export default PageLinks