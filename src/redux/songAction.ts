import axios from "axios";
import { ISongs } from "../../server/interface/types";
import { SONG_ACTIONS } from "./constants";

export interface IActionGetSongs {
    type:SONG_ACTIONS.GET_SONG,
    payload:ISongs[]
}

export interface IActionAddSong {
    type:SONG_ACTIONS.ADD_SONG,
    payload:ISongs
}

export interface IActionDeleteSong {
    type:SONG_ACTIONS.DELETE_SONG,
    payload:String
}

export interface IActionEditSong {
    type:SONG_ACTIONS.EDIT_SONG,
    payload:String
}


export type IActionSong = IActionGetSongs | IActionAddSong | IActionDeleteSong| IActionEditSong




export const getSongs = () => {
    return (dispatch: any) => {
        return axios.get('http://localhost:8800/songs').then(
            ({ data }) => dispatch({ type: SONG_ACTIONS.GET_SONG, payload: data }),
            err => console.log(err)
        );
    };
};

export const addSong = (song:ISongs) => {
    return (dispatch: any) => {
        return axios.post('http://localhost:8800/songs',song).then(
            ({ data }) => dispatch({ type: SONG_ACTIONS.ADD_SONG, payload: data }),
            err => console.log(err)
        );
    };
};

export const editSong = (songID : String) => {
    return (dispatch: any) => {
        return axios.patch(`http://localhost:8000/songs/${songID}`).then(
            ({ data }) => dispatch({ type: SONG_ACTIONS.EDIT_SONG, payload: data }),
            err => console.log(err)
        );
    };
};

export const deleteSong = (songID : String) => {
    return (dispatch: any) => {
        return axios.delete(`http://localhost:8000/songs/${songID}`).then(
            ({ data }) => dispatch({ type: SONG_ACTIONS.DELETE_SONG, payload: data }),
            err => console.log(err)
        );
    };
};