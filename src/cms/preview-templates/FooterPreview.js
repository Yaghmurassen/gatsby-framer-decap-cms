import React from "react";
import PropTypes from "prop-types";
import { FooterTemplate } from "../../templates/footer-page";

const FooterPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  console.log("data from FooterPreview ", data);

  if (data) {
    return <FooterTemplate title={data.title} alt={data.alt} />;
  } else {
    return <div>Loading...</div>;
  }
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  //   getAsset: PropTypes.func,
};

export default FooterPreview;
