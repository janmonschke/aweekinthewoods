import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle} className="blog-index">
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const { title, cover } = node.frontmatter
        const displayTitle = title || node.fields.slug
        const articleLink = node.fields.slug
        const coverImg = cover && cover.childImageSharp.fluid

        return (
          <article key={node.fields.slug} style={{ marginBottom: rhythm(2.4) }}>
            <header style={{ marginBottom: rhythm(1.4) }}>
              <Link style={{ boxShadow: `none` }} to={articleLink}>
                <h2
                  style={{
                    marginBottom: rhythm(1),
                    textAlign: "center",
                    ...scale(1.2),
                  }}
                >
                  {displayTitle}
                </h2>
                <Image fluid={coverImg} />
              </Link>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
                style={{
                  marginBottom: rhythm(0.4),
                }}
              />
              <Link to={articleLink}>Continue reading</Link>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            cover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
