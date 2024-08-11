import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

function Karusel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center justify-center bg-gray-200 h-full">
            <img src={product.image} alt={product.title} className="h-32 w-auto object-contain" />
            <div className="text-center mt-2">
              <p className="text-lg font-bold">{product.title}</p>
              <p className="text-sm text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Karusel;
