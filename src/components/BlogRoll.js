import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { Reveal } from "./utils/Reveal";

import "../style/tw-blog.scss";

const BlogRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="blog-container">
      {posts &&
        posts.map(({ node: post }) => (
          <Reveal>
            <article
              key={post.id}
              className={`blog-list-item max-xs:p-4 p-12 grid max-lg:grid-cols-1 grid-cols-4/1 gap-8 ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header className="m-auto">
                {post?.frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
                    <Link
                      to={post.fields.slug}
                      className="block overflow-hidden post-link"
                    >
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          className: "featured-image",
                        }}
                      />
                    </Link>
                  </div>
                )}
              </header>
              <div>
                <p className="post-meta italic font-semibold text-xl mb-8 max-xs:text-lg max-xs:mb-6">
                  {post.frontmatter.title}
                  <span className="text-xs block">{post.frontmatter.date}</span>
                </p>
                <p className="text-sm text-justify">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button font-bold" to={post.fields.slug}>
                    Lire la suite →
                  </Link>
                </p>
              </div>
            </article>
          </Reveal>
        ))}
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 600
                        quality: 100
                        # layout: FULL_WIDTH
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
