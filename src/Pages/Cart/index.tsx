import React, { useContext, useEffect , useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../../Context/GlobalContext"
import ProductCard from "../Product-List/Product-Card";

function CartPage(){

const {total , setTotal , cartData ,inCart , setInCart , dataChanged , setDataChanged} = useContext(GlobalContext)
// console.log(cartData);


useEffect(() => {
  
    if(cartData && cartData.length > 0) {
        let tempTotal = 0 
        cartData.map((element:any) => {

                tempTotal += element.totalPrice * element.quantity
                setTotal(tempTotal)
                
        })
        console.log(total);
        
    }

    
  }, [cartData , dataChanged , setDataChanged])


  const navigate = useNavigate()
useEffect(() => {
    setInCart(true)
},[])

function handleHomeReturn(){
    navigate('/')
}
function handleProductReturn(){
    navigate('/product-list')
}

    return <div className="bg-secondary min-h-screen  flex flex-col   w-screen">
                <div className="self-center mt-2">
                    <button onClick={handleHomeReturn} className="bg-primary h-[62px] w-[170px] p-4 border-2 font-bold border-secondary rounded-md m-4 ">Home</button>
                    <button onClick={handleProductReturn} className="bg-primary h-[62px] w-[170px] p-4 border-2 font-bold border-secondary rounded-md m-4 ">Product Page</button>
                </div>
        <h1 className="text-txt font-semibold bg-primary rounded-lg m-4 text-5xl text-center  p-4 ">Cart Page</h1>
      
        <div className="text-txt bg-primary rounded-lg  m-4 p-4 text-5xl">Total price: {total.toFixed(2)}</div>
        <div className="grid grid-cols-4 w-auto justify-items-stretch  gap-4 ">
        {
             cartData && cartData.length > 0 ? 
                cartData.map((element:any)=>{
                    // console.log(element);
                    // console.log(element.title);
                    
                    return <div className=" "> <ProductCard product = {element} /> </div>
                })
            
            : null
        }
        </div>
    </div>
}

export default CartPage


{/* <div className="flex flex-col"></div> */}