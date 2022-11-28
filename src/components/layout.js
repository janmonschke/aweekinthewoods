import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import icon from "../../content/assets/icon.svg";
import hamburger from "../../content/assets/hamburger.svg";
import close from "../../content/assets/close.svg";
import rss from "../../content/assets/rss.svg";

import { rhythm, scale } from "../utils/typography";

import "./layout.css";

const Layout = ({ location, title, className, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLabel = menuOpen ? "Open menu" : "Close menu";
  const isRoot = location.pathname === `${__PATH_PREFIX__}/`;

  const toggleMenu = useCallback((event) => {
    event.preventDefault();
    setMenuOpen((open) => !open);
  }, []);

  let header = (
    <>
      <Link
        to="/"
        className={["layout__headerLink", isRoot ? "is-root" : ""].join(" ")}
      >
        <img alt="" src={icon} className="layout__hikingIcon" />
        <button
          className="layout__menuBtn"
          aria-label={menuLabel}
          onClick={toggleMenu}
        >
          <img
            alt=""
            aria-hidden={true}
            src={menuOpen ? close : hamburger}
            className="layout__menuBtnIcon"
          />
        </button>
        <h1
          style={{
            ...(isRoot ? scale(0.9) : scale(0.4)),
            marginBottom: isRoot ? rhythm(1) : 0,
            marginTop: isRoot ? rhythm(0.2) : 0,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
      </Link>
      <nav
        className={["layout__menu", menuOpen ? "is-open" : ""].join(" ")}
        aria-label="main"
      >
        <h5>France</h5>
        <Link to="/france/auvergne">Auvergne</Link>
        <Link to="/france/gorges-du-verdon">Gorges du Verdon</Link>
        <h5>Scotland</h5>
        <Link to="/scotland/isle-of-arran-coastal-way">
          Isle of Arran Coastal Way
        </Link>
        <Link to="/scotland/west-highland-way">West Highland Way</Link>
        <Link to="/about" style={{ marginTop: "1em" }}>
          About
        </Link>
        <Link to="/rss.xml">
          RSS
          <i>
            <img
              alt=""
              aria-hidden={true}
              src={rss}
              className="layout__menuRssIcon"
            />
          </i>
        </Link>
      </nav>
    </>
  );
  return (
    <div className={`layout ${className}`}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <p>
          <small>
            Licenses:{" "}
            <a
              href="https://thenounproject.com/icon/rss-2146954/"
              rel="noreferrer"
              target="_blank"
            >
              RSS icon
            </a>{" "}
            created by Adrien Coquet,{" "}
            <a
              href="https://thenounproject.com/icon/hiking-2018469/"
              rel="noreferrer"
              target="_blank"
            >
              Hiking icon
            </a>{" "}
            created by Made by Made,{" "}
            <a
              href="https://thenounproject.com/icon/hamburger-2235852/"
              rel="noreferrer"
              target="_blank"
            >
              Hamburger icon
            </a>{" "}
            and{" "}
            <a
              href="https://thenounproject.com/icon/hamburger-2235852/"
              rel="noreferrer"
              target="_blank"
            >
              Close icon
            </a>{" "}
            created by Marie Van den Broeck.
          </small>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
