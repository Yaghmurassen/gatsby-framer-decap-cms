import React from "react";
import PropTypes from "prop-types";
import { FooterTemplate } from "../../templates/Footer";

const FooterPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    console.log("data from FooterPreview ::: ", data);

    return <FooterTemplate logo={getAsset(data.logo)} />;
  } else {
    return <div>Loading...</div>;
  }
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FooterPreview;
