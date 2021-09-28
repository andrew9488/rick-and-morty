import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {appReducer} from "./app-reducer/app-reducer";
import {imagesReducer} from "./images-reducer/images-reducer";
import {favoriteReducer} from "./favorite-reducer/favorite-reducer";
import {rootSaga} from "./root-saga";

export const rootReducer = combineReducers({
    app: appReducer,
    images: imagesReducer,
    favorites: favoriteReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)