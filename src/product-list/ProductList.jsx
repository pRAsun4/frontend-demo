import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './product-style.css'

export default function ProductList() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/products`);
      const newData = await response.json();
      setProducts(newData);
      console.log(newData);
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 border-red-700">
        {/* {products.map((product) => (
          <Link key={product.id} to={`/product-details/${product.id}`}>
            
          </Link>
        ))} */}
      </section>
    </>
  );
}
