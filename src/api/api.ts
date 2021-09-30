import axios, {AxiosResponse} from "axios";
import {ParamsType, ResponseDataType} from "../types/types";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/"
});

export const rickAndMortyAPI = {
    getImages(action: ParamsType): Promise<AxiosResponse<ResponseDataType>> {
        return instance.get<ResponseDataType>("api/character/", {
            params: {
                name: action.name, page: action.page, status: action.status, gender: action.gender
            }
        })
    },
};