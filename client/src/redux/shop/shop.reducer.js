import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    SORT_ITEMS
} from "./shop.types";

import compare from "utils/helpers/compare";

const INITIAL_STATE = {
    categories: [],
    errorMessage: null,
    isPending: false
};

function shopReducer (state = INITIAL_STATE, action = {}) {
    const { payload, type } = action;

    switch (type) {
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                errorMessage: payload,
                isPending: false
            };

        case FETCH_CATEGORIES_START:
            return {
                ...state,
                isPending: true
            };

        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isPending: false
            };

        case SORT_ITEMS:
            const { categories } = state;
            const { category } = payload;

            return {
                ...state,
                categories: {
                    ...categories,
                    [category]: getCategoryWithSortedItems(categories[category], payload)
                }
            };

        default:
            return state;
    }
}

export default shopReducer;

function getCategoryWithSortedItems (category, options) {
    const { items } = category;
    const { field, isAscending } = options;

    const sortedItems = items.sort(compare(field, isAscending));

    return {
        ...category,
        items: sortedItems
    };
}
