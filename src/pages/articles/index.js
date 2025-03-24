import * as React from "react";
import "../../style/tw-blog.scss";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="container-fluid !flex-col">
          <h1 className="blog-title">Articles</h1>
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
