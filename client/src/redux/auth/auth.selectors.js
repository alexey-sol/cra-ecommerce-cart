import { createSelector } from "reselect";

function selectAuth ({ auth }) {
    return auth;
}

export const selectError = createSelector(
    [selectAuth],
    ({ error }) => error
);

export const selectIsPending = createSelector(
    [selectAuth],
    ({ isPending }) => isPending
);

export const selectUser = createSelector(
    [selectAuth],
    ({ user }) => user
);

export default selectUser;
