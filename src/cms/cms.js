import CMS from "decap-cms-app";
import uploadcare from "decap-cms-media-library-uploadcare";
import cloudinary from "decap-cms-media-library-cloudinary";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import CompetencesPagePreview from "./preview-templates/CompetencesPagePreview";
import DecisionsPagePreview from "./preview-templates/DecisionsPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview); // Présentation
CMS.registerPreviewTemplate("competences", CompetencesPagePreview); // Compétences
CMS.registerPreviewTemplate("decisions", DecisionsPagePreview); // Décisions
CMS.registerPreviewTemplate("articles", BlogPostPreview); // Articles
// contact Ok
