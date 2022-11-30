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
              <a href="/croissant">Nav 1</a>
            </li>
            <li>
              <a href="">Nav 2</a>
            </li>
            <li>
              <a href="">Nav 3</a>
            </li>
            <li>
              <a href="">Nav 3</a>
            </li>
          </ul>
        </nav>
        <article className="content">
          <h1>Main article area</h1>
          <p>
            In this layout, we display the areas in source order for any screen
            less that 500 pixels wide. We go to a two column layout, and then to
            a three column layout by redefining the grid, and the placement of
            items on the grid.
          </p>
        </article>
        <footer className="main-footer">The footer</footer>
    </>
  )
}

export default Home;