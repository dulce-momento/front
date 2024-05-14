import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createInfo = async (info) => {
    const { data } = await $authHost.post('api/info', info);
    return data;
};

export const fetchInfos = async () => {
    const { data } = await $host.get('api/info');
    return data;
};

export const fetchInfosByProductId = async (id) => {
    const { data } = await $host.get('api/info/' + id);
    return data;
};

export const fetchTypes = async () => {
    const { data } = await $host.get('api/info/types');
    return data;
};

export const createRating = async (rating) => {
    const { data } = await $authHost.post('api/rating', rating);
    return data;
};

export const fetchRatings = async () => {
    const { data } = await $host.get('api/rating',);
    return data;
};

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product);
    return data;
};

export const fetchProducts = async (typeId, page, limit = 12) => {
    const { data } = await $host.get('api/product', {
        params: {
            typeId, page, limit
        }
    });
    return data;
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id);
    return data;
}

export const createCartItem = async (clientId, productId) => {
    const { data } = await $authHost.post('api/cart', { productId: productId });
    return data;
}

export const fetchClientCart = async () => {
    const { data } = await $authHost.get('api/cart');
    return data;
}

export const deleteCartItem = async(id) => {
    const { data } = await $authHost.delete('api/cart/' + id);
    return data;
} 