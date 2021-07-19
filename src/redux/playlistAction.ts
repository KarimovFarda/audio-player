import axios from "axios";
import { Dispatch } from "react";
import { IPlaylist } from "../models/types";
import { PLAYLIST_ACTIONS } from "./constants";

export interface IActionGetClasses {
    type: PLAYLIST_ACTIONS.GET_PLAYLIST,
    payload: IPlaylist
}
export interface IActionAddClass {
    type: PLAYLIST_ACTIONS.ADD_PLAYLIST,
    payload: IPlaylist
}
export interface IActionDeleteClass {
    type: PLAYLIST_ACTIONS.DELETE_PLAYLIST,
    payload: ""
}
export interface IActionEditClass {
    type: PLAYLIST_ACTIONS.EDIT_PLAYLIST,
    payload: ""
}

export type IActionClass = IActionGetClasses | IActionAddClass | IActionDeleteClass | IActionEditClass


export const getClasses = (id:Number) => (dispatch: Dispatch<any>) => {
    // return async (dispatch: Dispatch<any>) => {
        return axios.get('http://localhost:8080/dashboard').then(
            ({ data }) => dispatch({ type: PLAYLIST_ACTIONS.GET_PLAYLIST, payload: data }),
            err => console.log(err)
        );
    // };
};

export const addClass = (payload: any, id: Number) => (dispatch: Dispatch<any>) =>  {
    // return (dispatch: Dispatch<any>) => {
        return axios.post('http://localhost:8080/dashboard').then(({ data }) => dispatch({ type: PLAYLIST_ACTIONS.ADD_PLAYLIST, payload: data }),
            err => console.log(err)
        );
    // };
};

export const deleteClass = (userId: Number, classId: String) => (dispatch: Dispatch<any>) => {
    // return (dispatch: Dispatch<any>) => {
        return axios.delete(`http://localhost:8080/dashboard/${classId}`).then(({ data }) => dispatch({ type: PLAYLIST_ACTIONS.DELETE_PLAYLIST, payload: data }),
            err => console.log(err)
        );
    // };
};


export const editClass = (classId: string) => {
    return (dispatch: Dispatch<any>) => {
        return axios.patch(`http://localhost:8080/dashboard/${classId}`).then(({ data }) => dispatch({ type: PLAYLIST_ACTIONS.EDIT_PLAYLIST, payload: data }),
            err => console.log(err)
        );
    };
};