import { useNavigate, Form, type ActionFunctionArgs, redirect, useFetcher } from "react-router-dom";
import type { Product } from "../types";
import { deleteProduct } from "../services/api";


export const action = async ({params}: ActionFunctionArgs)=>{

    if(params.id !== undefined){

        await deleteProduct(+params.id)
        return redirect('/')
    }
}

const Details = ({product}: {product: Product})=>{

    const navigate = useNavigate();
    const fetcher = useFetcher();
    let productAvailable = product.available

    return(
        <>
            <tr className="text-center">
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">
                    <fetcher.Form method="POST">

                        <button type="submit" className="border border-zinc-400 p-1 rounded-sm font-medium text-zinc-700 hover:bg-zinc-200" name= "id" value= {product.id}>

                            {productAvailable ? 'Disponible' : 'No disponible'}

                        </button>
                    
                    
                    </fetcher.Form>

                    
                </td>
                <td className="p-2 flex justify-center gap-2">
                    <button onClick = {()=> navigate(`/productos/${product.id}/editar`) } className="p-1 rounded-sm bg-blue-500 text-zinc-50 font-bold hover:opacity-80">Editar</button>
                    <Form method="POST" action={`productos/${product.id}/eliminar`}>
                        <input value="Eliminar" type="submit" className="bg-red-600 p-2 text-zinc-50 font-bold" />
                    </Form>
                </td>
            </tr>
        </>
    )
}
export default Details;

