import {rootReducer} from "../store/store";
import {appReducerInitialState} from "../store/app-reducer/app-reducer";
import {setAppErrorAC, setAppStatusAC, setIsInitializedAC} from "../store/app-reducer/actions";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppReducerInitialStateType = typeof appReducerInitialState;


export type AppReducerActionType =
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setIsInitializedAC>;


export type AppRootStateType = ReturnType<typeof rootReducer>;