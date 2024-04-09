import * as React from "react";

import "../../style/tw-blog.scss";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section-blog">
          <div className="container-fluid">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
