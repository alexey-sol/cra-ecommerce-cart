import PropTypes from "prop-types";

const {bool, func, string} = PropTypes;

export const defaultProps = {
  value: ""
};

export const propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  handleChange: func.isRequired,
  required: bool,
  type: string.isRequired,
  value: string
};
