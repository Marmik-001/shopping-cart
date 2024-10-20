import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../../Context/GlobalContext";
import useFetch from "../../Hooks/useFetch";

function ProductPage(){

const {id} = useParams()
// console.log(id);
const { exists , setexists , cartData , setCartData, singleProduct , setSingleProduct} = useContext(GlobalContext)

const [data , loading , error] = useFetch(`https://dummyjson.com/products/${id}`)
const navigate = useNavigate()
// const {cartData , setCartData} = useContext(GlobalContext)

function handleAddToCart(singleProduct:any){

    // console.log(singleProduct);
    
    let oldCartData = [...cartData]
    const findIndexOfCurrentItem = oldCartData.findIndex( cartData => cartData.id === singleProduct.id )
    console.log(findIndexOfCurrentItem);
    if(findIndexOfCurrentItem === -1){
        oldCartData.push({
            ...singleProduct,
            totalPrice: singleProduct?.price,
            quantity: 1
        })
        
    }
    else{
        console.log('item already exists');
        setexists(true)
        
    }

    setCartData(oldCartData)
    localStorage.setItem('cartData' , JSON.stringify(oldCartData))
    // console.log(cartData);
    
    navigate('/cart')
    

}

useEffect(()=>{
if(data)
    {
            setSingleProduct(data)
    }

},[data , setSingleProduct])



// console.log(singleProduct?.images[0]);

if(loading ) return <h1 className="h-screen w-screen bg-secondary text-primary text-5xl font-bold text-center">Please wait we are fetching the data</h1>

return <div className="bg-secondary">
        <h1 className=" text-center text-5xl bg-primary p-4 pt-0 m-4 mt-0 rounded-lg text-secondary">Product Page</h1>
        <img className="border-2 border-primary mb-4  bg-gradient-to-b from-secondary from-80% to-primary" src={singleProduct?.thumbnail} alt={singleProduct?.title} />
        <div className="flex flex-row">
        {
            singleProduct?.images.map((element:any ,  index:number) => {
                // console.log('element : ' , element);
                
                return <img key={index} src={element} className="border-2 border-primary p-2 m-2  w-[200px]" alt="" />
            })
        }
       
        </div>
        <div className="flex flex-row">
        <button onClick={() => handleAddToCart(singleProduct)} className="py-4 px-8 border-2 text-center bg-primary text-secondary rounded-lg font-bold m-4">Add To Cart</button>
        <div className="text-txt text-xl py-3 h-[55px] px-8 border-2 text-center rounded-lg font-bold  m-4">{singleProduct?.price} $</div>
        </div>
        {
            exists ? <h1>Item already exists in cart</h1> : null
        }
    </div>
}

export default ProductPage