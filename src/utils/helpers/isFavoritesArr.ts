import {ImageType} from "../../types/types";

export const isBookmarksArr = (id: number, arr: ImageType[]) => {
    return arr && arr.some(item => item.id === id)
}