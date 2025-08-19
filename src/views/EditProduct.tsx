import { useNavigate, Form, useLoaderData, type LoaderFunctionArgs, type ActionFunctionArgs, useActionData, redirect } from "react-router-dom";
import { getProductByID } from "../services/api";
import type { Product } from "../types";
import { updateProduct } from "../services/api";
import Errors from "../components/Errors";
import InputsForm from "../components/Form";


export const loader = async ({params}: LoaderFunctionArgs)=>{

    if(params.id !== undefined){
        const product = await getProductByID(+params.id);
        return product;
    }
   
}
export const action = async ({request, params}: ActionFunctionArgs) => {
    
    const data = Object.fromEntries(await request.formData());
    let error = "";

    if(Object.values(data).includes('')){
        error = "Llenar todos los campos"
        return error
    }

    if(params.id !== undefined){

        await updateProduct(data, +params.id);
        return redirect("/")

    }
}

const statusAvailable = [
    {
        name: 'Disponible',
        statusProduct: true
    },
    {
        name: 'No Disponible',
        statusProduct: false
    }
]

const EditProduct = ()=>{
    
    const navigate = useNavigate();
    const product = useLoaderData() as Product;
    const error = useActionData() as string;

    return(

        <>
            <div className="flex justify-between">
                <p className="text-2xl text-zinc-900 font-bold">Registrar un producto</p>
                <button onClick={()=> navigate('/')} className="bg-blue-950 text-zinc-50 font-bold p-2 rounded-sm">Ver productos</button>
            </div>

            <Form method="POST" className="mt-10 space-y-4">

                {error && <Errors>{error}</Errors> }

                <InputsForm
                    product= {product}
                />

               
                <div className="flex flex-col gap-2"> 
                    <label className="font-bold" htmlFor="productAvailability">Disponibilidad el producto</label>
                    <select defaultValue={product.available.toString()} className="bg-zinc-50 p-2 rounded-sm" name="available" id="productAvailability">
                        {statusAvailable.map(status => (
                            <option 
                                key={status.name} 
                                value={status.statusProduct.toString()}
                                >{status.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <button className="w-full p-2 bg-zinc-950 font-bold text-zinc-50" type="submit">Editar producto</button>
                </div>
                
            </Form>
        </>
    )
}

export default EditProduct;