import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5002/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto mb-32">
      <div className="w-full mt-12 text-center space-y-5">
        <h3 className="text-xl font-bold text-[#FF3811]">Popular Products</h3>
        <h1 className="text-2xl lg:text-5xl font-bold">Browse Our Products</h1>
        <p className="pb-6 text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or Randomized <br /> words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {products &&
          products?.map(product => (
            <div key={product.id} className="card mx-3 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={product.img}
                  alt="Shoes"
                  className="rounded-xl w-80 h-52"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <h2 className="card-title">{product.title}</h2>
                <h2 className="text-xl font-semibold text-[#FF3811]">
                  Price : ${product.price}
                </h2>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center">
        <Link
          to="/"
          className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:border-[#FF3811] hover:bg-gray-200 hover:text-[#FF3811]"
        >
          More Products
        </Link>
      </div>
    </div>
  );
};

export default Products;
