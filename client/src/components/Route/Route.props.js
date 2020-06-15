import { elementType, object } from "prop-types";

export const defaultProps = {
    user: null
};

export const propTypes = {
    component: elementType,
    user: object
};
