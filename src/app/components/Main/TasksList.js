import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlassCheers, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import Task from "./task";

export default function TasksList (props){
    const language = useSelector(state => state.config.appLanguage.basics);
    const taskslength = useSelector(state => state.tasksList.tasks.length);

    const noTask =
        <>
            {taskslength> 0 ?
                <div>

                    <div className="mb-4 border-b">
                        <Task exist={true}></Task>
                    </div>
                </div>
                :
                <div className="font-thin text-center text-gray-500 text-2xl py-48">
                    <div className="inline-flex">
                        {language.noTasks}
                        <span className="ml-2">
                    <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
                </span>
                    </div>
                    <span className="block">
                    <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
            </span>
                </div>
            }
        </>
        ;

    const haveTask =
        <div>
            {taskslength> 0 ?
                <div>
                    <div className="mb-4 border-b">
                        <Task exist={true}></Task>
                    </div>
                </div>
                :
                <div className="border-b">
                </div>
            }
            <div>
                {props.createTasks.map( element => {
                    return (
                        <div className="mb-4 border-b">
                            <Task taskId={element} addTask={props.addTask} discardTask={props.discardTask}/>
                        </div>
                    );
                })}
            </div>
        </div>;

    return (
        <>
            {props.createTasks.length > 0 ? haveTask : noTask }
        </>
    );

}