import React, {useState} from "react";
import {Checkbox, TextField, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import tasksAction from "../../../modules/actions/tasksAction";

export default function Task(props){

    const language = useSelector(state => state.config.appLanguage.basics);
    const storeTask = useSelector(state => state.tasksList.tasks);
    const {component} = useSelector(state => state.config.colors)
    const dispatch = useDispatch();
    const [valueTask, setValueTask] = useState("");
    const handleChange = e => setValueTask(e.target.value);
    const [checked, setChecked] = React.useState(false);

    const handleCheck = e => {
        setChecked(e.target.checked);
    };

    const task = {
        id: storeTask.length,
        valueTask: valueTask,
        complete: checked,
    }

    const createTask =
        <div className={`flex shadow rounded-lg ${component}`}>
            <form noValidate className="w-full py-4">
                <div className="inline-flex w-full mb-2">
                    <Checkbox color={"primary"} checked={checked} onChange={handleCheck}></Checkbox>
                    <div className=" w-full mr-2">
                        <TextField className={'text-white'} fullWidth label={language.task} variant="outlined" placeholder={language.noText}
                                   size={"small"} onChange={handleChange} disabled={checked}>
                        </TextField>
                    </div>
                </div>
                <div className="inline-block ml-2 mb-2">
                    <span className="mr-2">
                        <Button variant="contained" onClick={() => props.discardTask(props.taskId)}>
                            {language.discard}
                        </Button>
                    </span>
                    <span>
                        <Button variant="contained" disabled={valueTask === "" ? true : false}
                                onClick={() => props.addTask(task)} >
                            {language.save}
                        </Button>
                    </span>
                </div>
            </form>
        </div>;

    return (
        <>
            {!props.exist ? createTask :
                <>
                    {storeTask.map( task => {
                        return (
                            <>
                            <div className="inline-flex w-full mb-2">
                                <Checkbox color={"primary"} checked={task.complete} onChange={() => dispatch(tasksAction.complete(task))}></Checkbox>
                                <div className=" w-full mr-2">
                                    <TextField fullWidth label={language.task} variant="outlined" size={"small"}
                                               value={task.valueTask} disabled={task.complete} >
                                    </TextField>
                                </div>
                            </div>
                            </>
                        )
                    })}
                </>

            }
        </>
    );
}
