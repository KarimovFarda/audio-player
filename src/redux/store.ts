import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { songsReducer, playlistReducer } from './reducer';


export const rootReducer = combineReducers({
 students:songsReducer,
 playlist : playlistReducer

 })
export const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        thunk
    )
);