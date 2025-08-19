import { productSchema, dbProductSchema, dbProductsSchema, type Product } from "../types";
import axios from "axios";

const createProduct = async (data: { [k: string]: FormDataEntryValue }) => {

    try {

        const result = productSchema.safeParse({
            name: data.name,
            price: +data.price
        });

        if (result.success) {

            const url = `${import.meta.env.VITE_DB_URL}/api/products`;
            await axios.post(url, result.data)
        }

    } catch (error) {
        console.log(error);
    }

}

const getProducts = async () => {

    try {

        const url = `${import.meta.env.VITE_DB_URL}/api/products`;
        const { data } = await axios(url);
        const result = dbProductsSchema.safeParse(data.data);

        if (result.success) {
            return result.data;
        } else {
            console.log('DB error');
        }


    } catch (error) {
        console.log(error);
    }
}

const getProductByID = async (id: Product['id']) => {

    try {
        const url = `${import.meta.env.VITE_DB_URL}/api/products/${id}`;
        const { data } = await axios(url);
        const result = dbProductSchema.safeParse(data.data);
        return result.data


    } catch (error) {
        console.log(error);
    }

}

const updateProduct = async (data: { [k: string]: FormDataEntryValue }, id: Product['id']) => {

    try {
        const url = `${import.meta.env.VITE_DB_URL}/api/products/${id}`;

        const result = dbProductSchema.safeParse({
            id,
            name: data.name,
            price: +data.price,
            available: data.available === 'true'
        });

        if (result.success) {
            await axios.put(url, result.data)
        } else {
            throw new Error('error')
        }

    } catch (error) {
        console.log(error);
    }

}

const deleteProduct = async (id: Product['id']) => {

    try {

        const url = `${import.meta.env.VITE_DB_URL}/api/products/${id}`;
        await axios.delete(url)


    } catch (error) {
        console.log(error);
    }

}

const updateAvailable = async (id: Product['id']) => {

    try {

        const url = `${import.meta.env.VITE_DB_URL}/api/products/${id}`;
        await axios.patch(url)

    } catch (error) {
        console.log(error);
    }

}

export {
    createProduct,
    getProducts,
    getProductByID,
    updateProduct,
    deleteProduct,
    updateAvailable
}