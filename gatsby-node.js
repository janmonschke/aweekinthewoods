const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = require.resolve(`./src/templates/blog-post.js`);
  const blogResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { type: { ne: "info" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      }
    `
  );

  if (blogResult.errors) {
    console.error(errors);
    throw blogResult.errors;
  }

  // Create blog posts pages.
  const posts = blogResult.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        iso_date: post.node.frontmatter.date,
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  const infoResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "info" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (infoResult.errors) {
    console.error(infoResult.errors);
    throw infoResult.errors;
  }

  // Create info pages
  const infoPosts = infoResult.data.allMarkdownRemark.edges;

  infoPosts.forEach((post) => {
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
