import type { Product } from "../types";


const InputsForm = ({product}: {product?: Product})=>{

    return(
        <>
             
            <div className="flex flex-col gap-2"> 
                <label className="font-bold" htmlFor="productName">Nombre del producto</label>
                <input defaultValue={product?.name} className="bg-zinc-50 p-2 rounded-sm" type="text" name="name" id="productName" placeholder="Ej. Monitor 20 pulgadas" />
            </div>
            <div className="flex flex-col gap-2"> 
                <label className="font-bold" htmlFor="productPrice">Precio del producto</label>
                <input defaultValue={product?.price} className="bg-zinc-50 p-2 rounded-sm" type="number" name="price" id="productPrice" placeholder="Ej.1000, 100, 10" />
            </div>
                
        </>
    )
}

export default InputsForm;