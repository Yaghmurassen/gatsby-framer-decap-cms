import * as React from "react";

import "../../style/tw-blog.scss";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="container-fluid">
          <h1 className="text-4xl font-bold mx-12 mt-28 mb-16">Articles</h1>
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
