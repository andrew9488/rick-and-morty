import axios from "axios";
import {ResponseDataType} from "../types/types";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/"
});

export const rickAndMortyAPI = {
    getImages(page: number = 1) {
        return instance.get<ResponseDataType>("api/character/", {
            params: {page}
        })
            .then(response => response.data)
    },
};