import axios, { AxiosResponse } from 'axios';

export const apiService = {
    fetchProducts: async (): Promise<AxiosResponse<any>> => {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response =  await axios.get(`${baseUrl}/products`);
        return response;
    }
}