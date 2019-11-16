import PropTypes from "prop-types";

const {object, string} = PropTypes;

export const defaultProps = {
  imageUrl: "",
  linkUrl: "",
  title: ""
};

export const propTypes = {
  history: object.isRequired,
  imageUrl: string,
  linkUrl: string,
  match: object.isRequired,
  size: string,
  title: string
};
