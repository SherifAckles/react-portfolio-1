import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Articles = ({ article }) => {
  const { title } = article;

  return (
    <article className="experience-details">
      <BsPatchCheckFill className="experience-details-icon" />
      <h4>{title}</h4>
    </article>
  );
};
//  add an extra layer of validation.
Articles.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Articles;
