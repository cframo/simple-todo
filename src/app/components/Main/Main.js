import React, {useEffect, useState} from "react";

import {faCalendarDay, faCalendarWeek, faInbox, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import tasksAction from "../../../modules/actions/tasksAction";
import {AddCircle} from '@material-ui/icons/';
import {IconButton} from '@material-ui/core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TasksList from "./TasksList";
import task from "./task";
import {text} from "@fortawesome/fontawesome-svg-core";

//Funciones

const headerIcon = index => {
    switch (index) {
        case 0:
            return faInbox;
        case 1:
            return faCalendarDay;
        case 2:
            return faCalendarWeek;
    }
}

const headerColor = index => {
    switch (index) {
        case 0:
            return "text-blue-400" ;
        case 1:
            return "text-yellow-400";
        case 2:
            return "text-purple-400";
    }
}

//End of functions

export default function Main () {

    const headers = Object.values(useSelector(state => state.config.appLanguage.headers));
    const headerSelected = useSelector(state => state.header);
    const {main, text} = useSelector(state => state.config.colors);
    const dispatch = useDispatch();

    const [tasks, setTasks] = useState([]);
    const defaultTask = {
        id: tasks.length,
        valueTask: "",
        complete: false,
    }

    const addTask = task => {
        dispatch(tasksAction.addTask(task));
        setTasks(tasks.filter(element => element.id !== task.id));
    }

    const discardTask = task => {
        setTasks(tasks.filter(element => element.id !== task.id));
    }

    return (
        <div className={`w-10/12 h-full flex-grow container ${main}`}>
            <div className="top-0 left-0 mt-24 h-2 px-12 mt-8">
                <div className="mb-6">
                    <FontAwesomeIcon icon={headerIcon(headerSelected)}
                                     className={headerColor(headerSelected)}/>
                    <span className={`font-semibold font-sans px-4 ${text}`}>
                        {headers[headerSelected]}
                    </span>
                </div>
                <div className="h-full">
                    <TasksList createTasks={tasks} addTask={addTask} discardTask={discardTask}></TasksList>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 mb-4">
                <span className="px-6">
                    <IconButton onClick={() => setTasks(state => [...state, defaultTask])}>
                        <AddCircle style={{ fontSize: 40 }} color="primary"></AddCircle>
                    </IconButton>
                </span>
            </div>
        </div>
    );
}
