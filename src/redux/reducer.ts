import { PLAYLIST_ACTIONS, SONG_ACTIONS } from "./constants";
import { IActionSong } from "./songAction";
import { ISongs } from "../../server/interface/types";
import { IPlaylist } from "../../server/interface/types";

import { IActionClass } from "./playlistAction";

const initialState = [{
    name : "",
    artist : "",
    uploadDate : "",
    audio : ""

}]



export const songsReducer = (state = initialState, action: IActionSong) => {
    switch (action.type) {
        case SONG_ACTIONS.GET_SONG:
            return action.payload;
        case SONG_ACTIONS.ADD_SONG:
            return [
                ...state,
                action.payload
            ]
        case SONG_ACTIONS.EDIT_SONG:

            return {

            }
        case SONG_ACTIONS.DELETE_SONG:
            return {

            }

            
        default:
            return state;
    }
}


const classes_initialState = [{
   
        name: "",
        creationDate: "",
        songs: [],
      
}]

export const playlistReducer = (state = classes_initialState, action: IActionClass) => {
    switch (action.type) {
        case PLAYLIST_ACTIONS.GET_PLAYLIST:
                return action.payload;
        case PLAYLIST_ACTIONS.ADD_PLAYLIST:
            return { ...state, filteredClasses: action.payload };

            break;
        case PLAYLIST_ACTIONS.EDIT_PLAYLIST:

            break;
        case PLAYLIST_ACTIONS.DELETE_PLAYLIST:

            break;
        default:
            return state;
    }
}