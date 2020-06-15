import PropTypes from "prop-types";

const {
    bool,
    func,
    object
} = PropTypes;

export const defaultProps = {
    isAscending: true,
    item: {}
};

export const propTypes = {
    isAscending: bool,
    item: object,
    onAddItemToCart: func.isRequired,
    setSorting: func
};
