import React from "react";
import PropTypes from "prop-types";
import { DecisionsPageTemplate } from "../../templates/decisions-page";

const DecisionsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  // const entryBlurbs = entry.getIn(["data", "blurbs"]).toJS();
  return <DecisionsPageTemplate blurbs={data.blurbs} />;
};

DecisionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default DecisionsPagePreview;
