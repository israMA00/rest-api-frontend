import { Outlet } from "react-router-dom";

const Layout = ()=>{

    return(
        <>
            <header className="w-full p-5 bg-zinc-950">
                <div className="max-w-5xl m-auto">
                    <p className="text-zinc-50 text-3xl font-bold">Administrador de productos</p>
                </div>
            </header>
            <div className="max-w-5xl m-auto mt-10 bg-zinc-200 p-10">
                <Outlet/>
            </div>
           
        </>
    )
}

export default Layout;