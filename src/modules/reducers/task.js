import ACTIONS from "../actions/tasksAction";

const defaultState = {
    tasks: []
}

const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.ADD_TASK:
            defaultState.tasks.push(action.payload);
            return defaultState;
        case ACTIONS.Types.DISCARD_TASK:
            defaultState.tasks.pop();
            return defaultState;
        case ACTIONS.Types.COMPLETE:
            console.log(action.payload);
            defaultState.tasks = defaultState.tasks.map( element => {
                if (element.id === action.payload.id){
                    return {
                        ...element, complete: !element.complete
                    }
                }
                return element;
            });
            return defaultState;
        default:
            console.log("d");
            return defaultState;
    }
}

export default taskReducer;