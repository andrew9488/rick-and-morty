import {ResponseDataType} from "../../types/types";

export const setDataAC = (data: ResponseDataType) =>
    ({type: "IMAGES/SET-DATA", data} as const)