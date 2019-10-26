import PropTypes from "prop-types";

const {number, string} = PropTypes;

export const defaultProps = {
  imageUrl: "",
  price: 0
};

export const propTypes = {
  id: number.isRequired,
  imageUrl: string,
  name: string.isRequired,
  price: number
};
