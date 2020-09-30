
//Tipos de accion
const Types = {
    CREATE_ITEM: "CREATE_ITEM"
};

//Acciones
const createItem = task => ({
    type: Types.CREATE_ITEM,
});

export default {
    createItem,
    Types
}