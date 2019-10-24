import PropTypes from "prop-types";

const {string} = PropTypes;

export const defaultProps = {
  imageUrl: "",
  title: ""
};

export const propTypes = {
  imageUrl: string,
  size: string,
  title: string
};
