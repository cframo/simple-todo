
const Types = {
    GET_TEXT: "GET_TEXT",
    CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
    GET_LANGUAGE: "GET_lANGUAGE"
}

const getLanguage = () => ({
    type: Types.GET_LANGUAGE,
});

const changeLanguage = () => ({
    type: Types.CHANGE_LANGUAGE,
});

const getText = title => ({
    type: Types.GET_TEXT,
    payload: title
});

export default {
    Types,
    getText,
    changeLanguage,
    getLanguage
}
