import React from "react";
import PropTypes from "prop-types";
import { CompetencesPageTemplate } from "../../templates/competences-page.js";

const CompetencesPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <CompetencesPageTemplate
        title={entry.getIn(["data", "title"])}
        // content={widgetFor("body")}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

CompetencesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CompetencesPagePreview;
