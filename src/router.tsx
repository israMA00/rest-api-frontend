import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import  ProductsAdmin from "./views/Products";
import NewProduct from "./views/NewProduct";
import EditProduct, {loader as editProductLoader, action as editProductAction } from "./views/EditProduct";
import { action as newProductAction } from "./views/NewProduct";
import { loader as productsLoader, action as productsAction } from "./views/Products";
import {action as tableDetailsAction} from "./components/TableDetails"


const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <ProductsAdmin/>,
                loader: productsLoader,
                action: productsAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar',
                element: <EditProduct/>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: tableDetailsAction
            }
        ]
    }
]);

export default router;

