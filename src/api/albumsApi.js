import axiosClient from "./axiosClient";
import { url } from "./constants";

const AlbumsApi = {
    getAllAlbums: () => {
        const requestUrl = url + `/album/albums`;
        return axiosClient.get(requestUrl);
    },
    createNewAlbum: (params) => {
        const requestUrl = url + `/album/albums`;
        return axiosClient.post(requestUrl, params);
    },
    getAlbum: (id) => {
        const requestUrl = url + `/album/albums/${id}`;
        return axiosClient.get(requestUrl, id);
    },
    updateAlbum: (params, id) => {
        const requestUrl = url + `/album/albums/${id}`;
        return axiosClient.put(requestUrl, params);
    },
    deleteAlbum: (id) => {
        const requestUrl = url + `/album/albums/${id}`;
        return axiosClient.delete(requestUrl);
    },
}

export default AlbumsApi;