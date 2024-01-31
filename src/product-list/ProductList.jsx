import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product-style.css";

export default function ProductList() {
  const [products, setProducts] = useState();

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    const newData = await response.json();
    setProducts(newData.products);
    console.log(newData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-5 xl:px-8 sm:px-6">
        {products?.map((product) => (
          <Link key={product.id} to={`/product-details/${product.id}`}>
            <div className="product-cards flex flex-col hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] roundex-md p-3">
              <div className="product-img w-auto h-auto relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
                <Link
                  to={`/product-details/${product.id}`}
                  className="quick-view flex justify-center items-center absolute w-full bottom-0 left-0 z-10 rounded-md "
                >
                  <p className="text-[#121212] text-[1rem]">Quick View</p>
                </Link>
              </div>
              <div className="product-content flex flex-col gap-4 items-start ">
                <p className="product-title text-[#121212] text-[1rem]">
                  {product.title}
                </p>
                <h4 className="product-price text-[#121212] text-[2rem]">
                 $ {product.price}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
