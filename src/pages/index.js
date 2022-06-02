import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { rhythm, scale } from "../utils/typography";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle} className="blog-index">
      <Seo title="All hiking reports" />
      {posts.map(({ node }) => {
        const { title, cover } = node.frontmatter;
        const displayTitle = title || node.fields.slug;
        const articleLink = node.fields.slug;
        const coverImg = cover && cover.childImageSharp.gatsbyImageData;

        return (
          <article key={node.fields.slug} style={{ marginBottom: rhythm(2.4) }}>
            <header style={{ marginBottom: rhythm(1.4) }}>
              <Link style={{ boxShadow: `none` }} to={articleLink}>
                <h2
                  style={{
                    marginBottom: rhythm(1),
                    textAlign: "center",
                    ...scale(0.7),
                  }}
                >
                  {displayTitle}
                </h2>
                <GatsbyImage image={coverImg} alt="" />
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
              <Link to={articleLink}>Read more</Link>
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

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
                gatsbyImageData(width: 1200, quality: 95)
              }
            }
          }
        }
      }
    }
  }
`;
