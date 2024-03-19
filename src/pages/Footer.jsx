import style from '../style/Footer.module.css'
export default function Footer() {
  return(
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footerContent}>
          <div>
            <h2>Author:</h2>
            <p>Timur Bersenev</p>
          </div>
          <nav className={style.contentNav}>
            <ul className="contentNavLists">
              <li className="contentNavList">
                <a className="contentNavLink" href="https://github.com/Timber265/" target="_blank"><img src="headerIcons/github.svg" alt="gitHub" /></a>
              </li>
              <li className="contentNavList">
                <a className="contentNavLink" href="https://www.linkedin.com/in/%D1%82%D0%B8%D0%BC%D0%B0-%D0%B1%D0%B5%D1%80%D1%81%D0%B5%D0%BD%D0%B5%D0%B2-855b092b6/" target="_blank"><img src="headerIcons/Linkedin.svg" alt="linkedIn" /></a>
              </li>
              <li className="contentNavList">
                <a className="contentNavLink" href="https://www.figma.com/team_invite/redeem/Bbng6phQVC8FK5RPHIKsfu" target="_blank"><img src="headerIcons/Figma.svg" alt="figma" /></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}