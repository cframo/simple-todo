import React from "react";

import {faInbox, faCalendarDay, faCalendarWeek, faPlus, faSearch, faCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import headersAction from "../../../modules/actions/headersAction";
import {IconButton} from "@material-ui/core";
import {Settings} from '@material-ui/icons/';
import DialogLanguage from "../dialogs/DialogLanguage";
import {light} from "@material-ui/core/styles/createPalette";

//Functions

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

export default function SideBar () {

    const {sidebar, selected, text, border} = useSelector(state => state.config.colors);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const headers = Object.values(useSelector(state => state.config.appLanguage.headers));
    const footer = useSelector(state => state.config.appLanguage.footer);
    const items = useSelector(state => state.items);
    const tasks = useSelector(state => state.tasksList.tasks.length);
    const headerSelected = useSelector(state => state.header);
    const dispatch = useDispatch();

    return (
        <>
            <div className={`w-2/12 border-r ${border} shadow-sm h-full flex-shrink-0 ${sidebar}`}>
                <table className="w-full rounded-sm mt-24">
                    <thead>
                    {headers.map((header, index ) => {
                        return(
                            <tr>
                                <td
                                    className={`px-6 py-1 font-semibold rounded-sm
                                    ${headerSelected === index ? selected: ''}`}
                                    onClick={() => dispatch(headersAction.changeHeader(index))}>
                                    <span className='float-left'>
                                        <FontAwesomeIcon icon={headerIcon(index)} className={headerColor(index)}/>
                                    </span>
                                    <span className={`px-4 ${text}`}> {header}</span>
                                    <span className='float-right text-gray-600 font-thin'>{tasks}</span>
                                </td>
                            </tr>
                        )
                    })}
                    </thead>
                </table>
                <div className="absolute inset-x-0 bottom-0 mb-2">
                    <table >
                        <tfoot>
                        <tr>
                            <td className="px-6">
                                <span>
                                    <FontAwesomeIcon icon={faPlus} className="text-sm"/>
                                </span>
                                <span className="font-semibold px-2">
                                    {footer}
                                </span>
                            </td>
                            <td>
                                <span>
                                    <FontAwesomeIcon icon={faSearch} className="text-sm"/>
                                </span>
                            </td>
                            <td>
                                <IconButton aria-label="settings" color={'primary'} onClick={handleClickOpen}>
                                    <Settings/>
                                </IconButton>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <DialogLanguage open={open} handleClose={handleClose}></DialogLanguage>
        </>
    );
}