import { useEffect, useState } from "react"

export default function ProductList () {
    const [product, setProduct] = useState ('');

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/products`);
            const newData = await response.json();
            setProduct(newData)
        }      
        fetchData();
    },[])
    return(
        <>

        </>
    )
}