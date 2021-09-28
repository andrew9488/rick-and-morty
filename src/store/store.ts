import {combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer/app-reducer";

export const rootReducer = combineReducers({
    app: appReducer
})

export const store = createStore(rootReducer)