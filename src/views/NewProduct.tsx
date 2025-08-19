import { useNavigate, Form, useActionData, type ActionFunctionArgs, redirect } from "react-router-dom";
import { createProduct } from "../services/api";
import Errors from "../components/Errors";
import InputsForm from "../components/Form";

export const action = async({request}: ActionFunctionArgs)=>{
   
    const data = Object.fromEntries(await request.formData());

    let error = '';

    if(Object.values(data).includes('')){
        error = 'Llenar todos los campos'
    }

    if(error.length > 0){
        return error;
    }

    await createProduct(data);
    return redirect('/');
}


const NewProduct = ()=>{
    
    const navigate = useNavigate();
    const error = useActionData();

    return(
        <>
            <div className="flex justify-between">
                <p className="text-2xl text-zinc-900 font-bold">Registrar un producto</p>
                <button onClick={()=> navigate('/')} className="bg-blue-950 text-zinc-50 font-bold p-2 rounded-sm">Ver productos</button>
            </div>

            <Form method="POST" className="mt-10 space-y-4">

                {error && <Errors>{error}</Errors>}

                <InputsForm/>
               
                <div>
                    <button className="w-full p-2 bg-zinc-950 font-bold text-zinc-50" type="submit">Crear un nuevo producto</button>
                </div>
                
            </Form>
        </>
    )
}

export default NewProduct;