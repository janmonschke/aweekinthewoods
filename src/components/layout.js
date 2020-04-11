import React from "react"
import { Link } from "gatsby"
import icon from "../../content/assets/icon.svg"

import { rhythm, scale } from "../utils/typography"

import "./layout.css"

const Layout = ({ location, title, className, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.9),
          marginBottom: rhythm(1),
          marginTop: rhythm(1.2),
          textAlign: "center",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <img
            alt=""
            src={icon}
            style={{
              width: "3rem",
              height: "3rem",
              margin: "0.5rem auto",
              display: "block",
            }}
          />
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 style={{ textAlign: "center" }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
            position: "relative",
          }}
          to={`/`}
        >
          <img
            alt=""
            src={icon}
            style={{
              width: "2rem",
              height: "2rem",
              margin: "0.5rem auto",
              display: "block",
            }}
          />
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div className={`layout ${className}`}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <p>
          <small>Icon by Made by Made from the Noun Project</small>
        </p>
      </footer>
    </div>
  )
}

export default Layout
