import todoReducer from "./reducer";
import {combineReducers} from "redux";
import headerReducer from "./header";
import configReducer from "./config";
import taskReducer from "./task";

const allReducers = combineReducers({
    items: todoReducer,
    header: headerReducer,
    config: configReducer,
    tasksList: taskReducer
});

export default allReducers;