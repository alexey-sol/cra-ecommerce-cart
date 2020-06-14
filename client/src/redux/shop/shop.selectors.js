import { createSelector } from "reselect";

function selectShop ({ shop }) {
    return shop;
}

export const selectIsGenreFetching = createSelector(
    [selectShop],
    ({ isFetching }) => isFetching
);

export const selectIsGenresFetched = createSelector(
    [selectShop],
    ({ genres }) => Boolean(genres)
);

export const selectGenres = createSelector(
    [selectShop],
    ({ genres }) => genres
);

export const selectGenresForPreview = createSelector(
    [selectGenres],
    (genres) => {
        return Object.keys(genres).map(genre => genres[genre]);
    }
);

export const selectGenre = (genreId) => {
    return createSelector(
        [selectGenres],
        (genres) => genres[genreId]
    );
};
