import type { PropsWithChildren } from "react";

const Errors = ({children}: PropsWithChildren)=>{

    return(
        <>
            <p className="w-full text-center p-2 bg-red-500 font-bold text-zinc-50">{children}</p>
        </>
    )

}

export default Errors;