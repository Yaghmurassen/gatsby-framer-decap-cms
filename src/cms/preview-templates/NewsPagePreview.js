import React from "react";
import PropTypes from "prop-types";
import { NewsPageTemplate } from "../../templates/news-page";

const NewsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  console.log("entryentryentryentry ", entry);

  return (
    <NewsPageTemplate
      title={data.title}
      image={getAsset(data.image)}
      alt={data.alt}
      description={data.description}
      url={data.url}
      link={data.link}
      pdf={data.pdf}
    />
  );
};

NewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default NewsPagePreview;
