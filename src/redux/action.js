export const ADD_LISTITEM = "ADD_LISTITEM";
export const DELETE_LISTITEM = "DELETE_LISTITEM";
export const UPDATE_LISTITEM = "UPDATE_LISTITEM"

export function AddItem(item) {
    return {
        type: "ADD_LISTITEM",
        payload: item
    }
}
export function DeleteItem(item) {
    return {
        type: "DELETE_LISTITEM",
        payload: item
    }
}
export function UpdateItem(item) {
    return {
        type: "UPDATE_LISTITEM",
        payload: item
    }
}