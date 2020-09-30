
//Tipos de accion
const Types = {
    CHANGE_DMODE: "CHANGE_DMODE",
    CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
};

//Acciones
const changeDarkMode = e => ({
    type: Types.CHANGE_DMODE,
});

const changeLanguage = () => ({
    type: Types.CHANGE_LANGUAGE,
});


export default {
    changeDarkMode,
    changeLanguage,
    Types
}