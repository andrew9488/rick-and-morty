import {RequestStatusType} from "../../types/types";

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-APP-STATUS', status} as const);
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-APP-ERROR', error} as const);
export const setIsInitializedAC = (isInitialized: boolean) =>
    ({type: 'APP/SET-IS-INITIALIZED', isInitialized} as const);