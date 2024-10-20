import React, { createContext, ReactNode, useState } from "react";
interface GlobalContextProviderProps{
    children: ReactNode
}

export const GlobalContext = createContext<any>(null)


export default function GlobalContextProvider({children}:GlobalContextProviderProps)
{

    const [productId , setProductId] = useState<null | number>()
    const [productData , setProductData] = useState<any>()
    const [singleProduct , setSingleProduct] = useState<any>()
    const [cartData , setCartData] = useState<any>([])
    const [exists , setexists ] = useState<any>(false)
    const [inCart , setInCart] = useState<any>()
    const [dataChanged , setDataChanged] = useState<any>(false)
    const [total , setTotal] = useState(0)

    // const navigate = useNavigate()

    function  increaseCurrentItemCount(getDataId:any){
        
        // console.log(cartData);
        // console.log(getDataId);

        
        if(cartData && cartData.length > 0 ){
            cartData.map( (element:any) => {
                if(element.id === getDataId){
                    element.quantity += 1
                    console.log(element.quantity);
                }
            })
        }
        setDataChanged(!dataChanged)
        
    }
    function decreaseCurrentItemCount(getDataId:any){
        if(cartData && cartData.length > 0 ){
            cartData.map( (element:any) => {
                if(element.id === getDataId && element.quantity > 0){
                    element.quantity = element.quantity - 1
                    console.log(element.quantity);
                }
            })
        }
        setDataChanged(!dataChanged)
        
        
    }


    return <GlobalContext.Provider value={{total , setTotal, dataChanged , setDataChanged , increaseCurrentItemCount , decreaseCurrentItemCount , inCart , setInCart , exists , setexists , cartData , setCartData , productId , setProductId , productData , setProductData , singleProduct , setSingleProduct}}>
        {children}
    </GlobalContext.Provider>
}