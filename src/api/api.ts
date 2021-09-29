import axios from "axios";
import {ResponseDataType, ResultType} from "../types/types";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/"
});

export const rickAndMortyAPI = {
    getImages() {
        return instance.get<ResponseDataType>("api/character/")
            .then(response => response.data)
    },
    getImagesByPage(page: number = 1) {
        return instance.get<ResponseDataType>("api/character/", {
            params: {page}
        })
            .then(response => response.data)
    },
};