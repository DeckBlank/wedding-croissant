import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../customHooks/theme";


const Home = (props:any) => {
  const {changeTheme}  = props
  //const defaultDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`ligth`;
  const [openMenu, setOpenMenu] = useState(false);
  //const [theme,setTheme] = useState(defaultDark);
  const menuOpened = `cross`;
  return (
    <>
      <header className="main-header ">
          <a className="logo" href="/">
            Logo
          </a>
          <button className="theme" onClick={() => changeTheme()}>
            theme
          </button>
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            {/* <input type="checkbox" /> */}
            <span className={`${openMenu ? menuOpened : ``}`}></span>
            <span className={`${openMenu ? menuOpened : ``}`}></span>
            <span className={`${openMenu ? menuOpened : ``}`}></span>
          </div>
        </header>
        <nav className={`main-nav ${openMenu ? menuOpened : ``}`}>
          <ul>
            <li>
              <a href="/croissant">Kathy&Jose</a>
            </li>
          </ul>
        </nav>
        <article className="content">
          <h1>Lorem Ipsum</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </article>
        <footer className="main-footer">footer</footer>
    </>
  )
}

export default Home;