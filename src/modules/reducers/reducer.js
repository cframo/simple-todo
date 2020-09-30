import ACTIONS from '../actions/action'

const defaultState = {
    items: 0,
};

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.CREATE_ITEM:
            defaultState.items++;
            return (defaultState.items);

        default:
            return defaultState.items;

    }

};

export default todoReducer;