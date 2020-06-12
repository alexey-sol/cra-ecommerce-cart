import SECTIONS from "./directory.data";

const INITIAL_STATE = {
    sections: SECTIONS
};

function directoryReducer (state = INITIAL_STATE, action = {}) {
    const { type } = action;

    switch (type) {
        default:
            return state;
    }
}

export default directoryReducer;
