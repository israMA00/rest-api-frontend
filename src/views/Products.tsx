import { useNavigate, useLoaderData, type ActionFunctionArgs } from "react-router-dom";
import { getProducts, updateAvailable } from "../services/api";
import type { Products } from "../types";
import Details from "../components/TableDetails";

export const loader = async ()=>{

   const products = await getProducts();
   return products;
}

export const action = async ({request}: ActionFunctionArgs)=>{

        const data = Object.fromEntries(await request.formData());
        await updateAvailable(+data.id)
        
}

const ProductsAdmin = ()=>{
    
    const navigate = useNavigate();
    const products = useLoaderData() as Products;

    return(
        <>
            <div className="flex justify-between">
                <p className="text-2xl text-zinc-900 font-bold">Adminitrar los productos</p>
                <button onClick= {()=>navigate('/productos/nuevo')} className="bg-blue-950 text-zinc-50 font-bold p-2 rounded-sm">Crear nuevo producto</button>
            </div>
            <table className="mt-20 w-full bg-zinc-300">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Disponibilidad</th>
                        <th>Editar/Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <Details
                            key={product.id}
                            product = {product}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ProductsAdmin;