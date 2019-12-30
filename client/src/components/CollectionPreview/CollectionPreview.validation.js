import PropTypes from "prop-types";

const {array, string} = PropTypes;

export const defaultProps = {
  items: []
};

export const propTypes = {
  items: array,
  title: string.isRequired
};
