import ACTIONS from '../actions/configAction';
import config from '../../app/config/config';


const defaultState = {
    config: config,
    language: config.language,
    mode: config.mode
}

const configReducer = (state = defaultState, action) => {
    const {languages} = defaultState.config;
    let { language } = defaultState;
    let colors  = defaultState.config.colors[defaultState.mode];
    let appLanguage = languages[language];

    switch (action.type) {

        case ACTIONS.Types.CHANGE_LANGUAGE:
            defaultState.language = language = (language === "english" ? "spanish" : "english");
            appLanguage = languages[language];
            return {language, appLanguage, colors};

        case ACTIONS.Types.CHANGE_DMODE:
            defaultState.mode = (defaultState.mode === "light" ? "dark" : "light");
            colors  = defaultState.config.colors[defaultState.mode];
            return {language, appLanguage, colors};

        default:

            return {language, appLanguage, colors};
    }
}

export default configReducer