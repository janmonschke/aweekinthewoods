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
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: rhythm(1),
          textAlign: "center",
        }}
      >
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
              width: "4rem",
              height: "4rem",
              position: "absolute",
              margin: "-0.25rem 0 0 -4.5rem",
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
              position: "absolute",
              margin: 0,
              marginLeft: "-2.5rem",
              marginTop: "-0.25rem",
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
