import {AppReducerActionType, AppReducerInitialStateType, RequestStatusType} from '../../types/types';

export const appReducerInitialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
};

export const appReducer = (
    state: AppReducerInitialStateType = appReducerInitialState,
    action: AppReducerActionType,
): AppReducerInitialStateType => {
    switch (action.type) {
        case 'APP/SET-APP-STATUS':
            return {
                ...state,
                status: action.status,
            };
        case 'APP/SET-APP-ERROR':
            return {
                ...state,
                error: action.error,
            };
        case 'APP/SET-IS-INITIALIZED':
            return {
                ...state,
                isInitialized: action.isInitialized,
            };
        default:
            return state;
    }
};