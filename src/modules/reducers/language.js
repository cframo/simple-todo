import ACTIONS from "../actions/languageAction"
import config from "../../app/config/config"

const defaultState = {
    config: config,
    language: config.language,
}

const languageReducer = (state = defaultState, action) => {
    const {languages} = defaultState.config;
    let { language } = defaultState;
    let appLanguage = languages[language];
    switch (action.type) {

        case ACTIONS.Types.CHANGE_LANGUAGE:
            defaultState.language = language = (language === "english" ? "spanish" : "english");
            appLanguage = languages[language];
            return {language, appLanguage};

        case ACTIONS.Types.GET_LANGUAGE:
            console.log('test2');
            return language

        default:
            return {language, appLanguage};
    }
}

export default languageReducer