import React from "react";
import PropTypes from "prop-types";
import { NewsPageTemplate } from "../../templates/news-page";

const NewsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  // const entryBlurbs = entry.getIn(["data", "blurbs"]).toJS();
  console.log("entry from NewPagePreview ", data);

  return <NewsPageTemplate blurbs={data.blurbs} />;
};

NewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default NewsPagePreview;
