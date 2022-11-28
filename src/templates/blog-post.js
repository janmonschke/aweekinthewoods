import React from "react";
import { Link, graphql } from "gatsby";

import BlogPostFooter from "../components/blogpost-footer";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { rhythm } from "../utils/typography";

import "./blog-post.css";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const { cover, title, date } = post.frontmatter;
  const coverImg =
    cover?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  return (
    <Layout location={location} title={siteTitle} className="blogPost">
      <Seo title={title} description={post.excerpt} coverSrc={coverImg} />
      <article>
        <header style={{ textAlign: "center" }}>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.title}
          </h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{ marginBottom: rhythm(2) }}
        />
        <div style={{ marginBottom: rhythm(2) }}>
          <BlogPostFooter date={date} />
        </div>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 300)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`;
