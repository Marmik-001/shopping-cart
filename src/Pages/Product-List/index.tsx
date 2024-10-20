import { NavLink } from "react-router-dom"
import useFetch from "../../Hooks/useFetch"
import ProductCard from "./Product-Card"
import { useContext , useEffect } from "react"
import { GlobalContext } from "../../Context/GlobalContext"

function ProductListPage(){

const [data , loading , error] = useFetch('https://dummyjson.com/products')
const { setInCart ,  productId , setProductId , productData , setProductData} = useContext(GlobalContext)
// console.log(productData);


useEffect(() => {
  
    data && data.products.length > 0 ? setProductData(data.products) : setProductData(null)
    setInCart(false)
  
}, [data])



    return <div className="bg-secondary h-fit w-screen flex flex-col">
        <div className=" flex flex-row justify-center">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
            <button  className="bg-primary p-4 border-2 font-bold border-secondary rounded-md m-4 ">Home Page</button>

        </NavLink>
        <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
            <button  className="bg-primary p-4 border-2 font-bold border-secondary rounded-md m-4 ">Cart Page</button>

        </NavLink>
        </div>
        <h1 className="text-secondary rounded-lg bg-primary font-bold border-secondary py-4 text-center border-2 m-[3px] px-8 ">Product-List Page</h1>
            {
                loading ? <div className="text-primary h-svh text-5xl  bg-slate-600 mt-44 text-center">Please wait . . .</div>: null 
            }
        <div className="grid grid-cols-4 justify-items-stretch  gap-4   border-2 ">
            {
                data && data.products.length > 0
                ? 
                data.products.map((product:any) => {
                    
                    return <ProductCard key={product.id} product = {product}/>
                })
                : null
            }
        </div>

    </div>
}

export default ProductListPage