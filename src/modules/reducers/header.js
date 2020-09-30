import ACTIONS from '../actions/headersAction'

const defaultState = {
    header: 0
};

const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.CHANGE_HEADER:
            return defaultState.header = action.payload;

        default:
            return defaultState.header;

    }

};

export default headerReducer