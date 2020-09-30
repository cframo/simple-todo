//Action's types
const Types = {
    CHANGE_HEADER: "CHANGE_HEADER",
}

//Actions

const changeHeader = header => ({
    type: Types.CHANGE_HEADER,
    payload: header
})

export default {
    Types,
    changeHeader
}