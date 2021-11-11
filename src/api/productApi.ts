import { ListParams, ListResponse, Product } from "../models";
import axiosClient from "./axiosClient";

const productApi = {

    getAll(): Promise<Product[]> {
        const url = "/products";
        return axiosClient.get(url)
    },

    getAllProduct(params: ListParams): Promise<ListResponse<Product>> {
        const url = "/products";
        return axiosClient.get(url, { params })
    },

    getProductById(id: string): Promise<Product> {
        const url = `/products/${id}`;
        return axiosClient.get(url)
    },

    addProduct(data: Product): Promise<Product> {
        const url = `/products`;
        return axiosClient.post(url, data)
    },

    updateProduct(data: Partial<Product>): Promise<Product> {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data)
    },

    removeProduct(id: string): Promise<any> {
        const url = `/products/${id}`;
        return axiosClient.delete(url)
    }

}

export default productApi;