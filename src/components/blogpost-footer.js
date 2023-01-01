/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { rhythm, scale } from "../utils/typography";

const BlogPostFooter = ({ date }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 80, height: 80)
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <footer style={{ ...scale(-1 / 10) }}>
      {date && <p>Published on: {date}</p>}
      <div
        style={{
          display: `flex`,
        }}
      >
        <GatsbyImage
          image={data.avatar.childImageSharp.gatsbyImageData}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 80,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p style={{ marginBottom: "0.1em" }}>
          Written by <strong>{author}</strong>, an avid hiker living in Berlin,
          which is way too far away from the mountains. You can find his
          personal blog at{" "}
          <a href="https://janmonschke.com" target="_blank">
            janmonschke.com
          </a>{" "}
          and follow him on{" "}
          <a href="https://social.lol/@janmon" target="_blank" rel="me">
            🐘 Mastodon
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default BlogPostFooter;
