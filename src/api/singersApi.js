import axiosClient from "./axiosClient";
import { url } from "./constants";

const SingersApi = {
    getAllSingers: () => {
        const requestUrl = url + "/singer/singers";
        return axiosClient.get(requestUrl);
    },
    createNewSinger: (params) => {
        const requestUrl = url + `/singer/singers`;
        return axiosClient.post(requestUrl, params);
    },
    getSinger: (id) => {
        const requestUrl = url + `/singer/singers/${id}`;
        return axiosClient.get(requestUrl, id);
    },
    updateSinger: (params, id) => {
        const requestUrl = url + `/singer/singers/${id}`;
        return axiosClient.put(requestUrl, params);
    },
    deleteSinger: (id) => {
        const requestUrl = url + `/singer/singers/${id}`;
        return axiosClient.delete(requestUrl);
    },
    
}

export default SingersApi;