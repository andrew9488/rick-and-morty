import axios from "axios";
import {ResponseDataType} from "../types/types";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/"
});

export const rickAndMortyAPI = {
    getImages() {
        return instance.get<ResponseDataType>("api/character/").then(response => response.data)
    },
};