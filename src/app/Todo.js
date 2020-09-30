import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import {useDispatch} from "react-redux";
function Todo(){
    const dispatch = useDispatch();
    return (
        <>
            <div className='h-screen flex'>
                <Sidebar/>
                <Main/>
            </div>
        </>

    )

}
export default Todo;
