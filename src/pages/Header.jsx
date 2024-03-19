import { Link } from "react-router-dom"
import style from '../style/Header.module.css'
export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.headerContent}>
          <Link to="/" className={style.headerLogo}>
            <img src="headerIcons/logo.svg" alt="Logo" />
            <p>Portfolio</p>
          </Link>
          <nav className={style.headerNav}>
            <ul className="headerLists">
              <li className="headerList">
                <Link className="headerLink" to="/project">Project</Link>
              </li>
              <li className="headerList">
                <Link className="headerLink" to="/project">Technologies</Link>
              </li>
              <li className="headerList">
                <Link className="headerLink" to="/project">About me</Link>
              </li>
            </ul>
          </nav>
          <nav className={style.socialNav}>
            <ul className="socialLists">
              <li className="socialList">
                <a className="socialLink" href="https://github.com/Timber265/" target="_blank"><img src="headerIcons/github.svg" alt="gitHub" /></a>
              </li>
              <li className="socialList">
                <a className="socialLink" href="https://www.linkedin.com/in/%D1%82%D0%B8%D0%BC%D0%B0-%D0%B1%D0%B5%D1%80%D1%81%D0%B5%D0%BD%D0%B5%D0%B2-855b092b6/" target="_blank"><img src="headerIcons/Linkedin.svg" alt="linkedIn" /></a>
              </li>
              <li className="socialList">
                <a className="socialLink" href="https://www.figma.com/team_invite/redeem/Bbng6phQVC8FK5RPHIKsfu" target="_blank"><img src="headerIcons/Figma.svg" alt="figma" /></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}