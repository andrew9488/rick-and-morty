import {combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer/app-reducer";
import {imagesReducer} from "./image-reducer/images-reducer";

export const rootReducer = combineReducers({
    app: appReducer,
    images: imagesReducer
})

export const store = createStore(rootReducer)