import {NavLink ,Navigate, useNavigate } from "react-router-dom"

function Home(){
    



    return <div className="flex flex-col content-center  w-screen h-screen bg-secondary text-txt ">
        <h1 className="text-center text-5xl mt-10 mb-2">Welcome User</h1>
        <h1 className="text-center text-4xl mt-36 mb-12">Home Page</h1>
        <div className="self-center ">
        <NavLink
            to="/product-list"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
            <button  className="bg-primary p-4 border-2 border-primary border-opacity-10 font-semibold   rounded-md m-4 text-secondary h-[62px] w-[170px] ">Product Page</button>

        </NavLink>
        
        <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
            <button  className="bg-primary p-4 border-2 border-primary border-opacity-10 font-semibold   rounded-md m-4 text-secondary h-[62px] w-[170px]">Cart Page</button>

        </NavLink>
            
        </div>
    </div>
}

export default Home