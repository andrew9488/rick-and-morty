import axios from "axios";
import {ResponseType} from "../types/types";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/"
});

export const rickAndMortyAPI = {
    getImages() {
        return instance.get<ResponseType>("api/character/").then(response => response.data)
    },
};