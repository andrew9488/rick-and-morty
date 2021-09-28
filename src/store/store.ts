import {combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer/app-reducer";
import {imagesReducer} from "./images-reducer/images-reducer";
import {favoriteReducer} from "./favorite-reducer/favorite-reducer";

export const rootReducer = combineReducers({
    app: appReducer,
    images: imagesReducer,
    favorites: favoriteReducer
})

export const store = createStore(rootReducer)