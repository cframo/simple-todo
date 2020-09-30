import task from "../../app/components/Main/task";

const Types = {
    ADD_TASK: "ADD_TASK",
    DELETE_TASK: "DELETE_TASK",
    UPDATE_TASK: "UPDATE_TASK",
    DISCARD_TASK: "DISCARD_TASK",
    COMPLETE: "COMPLETE"
}

const addTask = task => ({
   type: Types.ADD_TASK,
   payload: task
});

const deleteTask = task => ({
   type: Types.DELETE_TASK,
   payload: task
});

const updateTask = task => ({
   type: Types.UPDATE_TASK,
   payload: task
});

const complete = task => ({
    type: Types.COMPLETE,
    payload: task
});

const discardTask = () => ({
   type: Types.DISCARD_TASK
});

export default {
    Types, addTask, deleteTask, updateTask, discardTask, complete
}