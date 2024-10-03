import CMS from "decap-cms-app";
import uploadcare from "decap-cms-media-library-uploadcare";
import cloudinary from "decap-cms-media-library-cloudinary";

import CompetencesPagePreview from "./preview-templates/CompetencesPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import NewsPagePreview from "./preview-templates/NewsPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview); // Présentation
CMS.registerPreviewTemplate("competences", CompetencesPagePreview); // Compétences
CMS.registerPreviewTemplate("news", NewsPagePreview); // Décisions
CMS.registerPreviewTemplate("blog", BlogPostPreview); // Articles
