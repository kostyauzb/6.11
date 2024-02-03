import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getProducts } from "../Api/Api";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const data = await getProducts();
      console.log("API Response:", data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered mb-8 w-full max-w-xs"
      />
      <div className="grid grid-cols-[3fr_1fr] gap-8">
        <div className="grid gap-8 grid-cols-2">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="border p-6">
          <h3 className="text-2xl font-bold">Categories</h3>
          <ul>
            <li>All</li>
            <li>Clothes</li>
            <li>Electronics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
