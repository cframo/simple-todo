import React from "react";
import {useDispatch, useSelector} from "react-redux";
import  {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Switch} from "@material-ui/core";
import configAction from "../../../modules/actions/configAction";

export default function DialogLanguage (props) {

    const [english, setEnglish] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);
    const {component, text} = useSelector(state => state.config.colors);
    const {settings, basics} = useSelector(state => state.config.appLanguage);
    const dispatch = useDispatch();


    const handleChangeLanguage = () => {
        setEnglish(!english);
        dispatch(configAction.changeLanguage());
    };

    const handleChangeDarkMode = () => {
        setDarkMode(!darkMode);
        dispatch(configAction.changeDarkMode());
    }


    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" >
            <DialogTitle id="alert-dialog-title" className={`border-b border-gray-400 ${component}`}>
                <span className={text}>{settings.title}</span>
            </DialogTitle>
            <DialogContent className={component}>
                <div className="border-b border-gray-200">
                    <span className={`font-sans font-semibold ${text}`}>
                        <p>
                            {settings.languageOption.title}
                        </p>
                    </span>
                    <div className={`px-6 py-2 ${text}`}>
                        <span>
                            {settings.languageOption.spanish}
                        </span>
                        <span>
                        <Switch
                            checked={english}
                            onChange={handleChangeLanguage}
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        </span>
                        <span>
                            {settings.languageOption.english}
                        </span>
                    </div>

                </div>
                <div className="border-b border-gray-200">
                    <span className={`font-sans font-semibold ${text}`}>
                        <p>
                            {settings.darkMode.title}
                        </p>
                    </span>
                    <div className={`px-6 py-2 ${text}`}>
                        <span>
                            OFF
                        </span>
                        <span>
                        <Switch
                            checked={darkMode}
                            onChange={handleChangeDarkMode}
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        </span>
                        <span>
                            ON
                        </span>
                    </div>

                </div>
            </DialogContent>
            <DialogActions className={component}>
                <Button onClick={props.handleClose} color="primary" autoFocus>
                    {basics.close}
                </Button>
            </DialogActions>
        </Dialog>
    );

}

