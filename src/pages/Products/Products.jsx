import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SectionTitle from '../share/SectionTitle/SectionTitle';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, []);

  // Calculate the index of the last product to display
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product to display
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Get the current page of products
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
   <div>
   <SectionTitle
        subHeading={"See Our Product List"}
        heading ={" Collection Of Products "}
        >
        </SectionTitle>
   <div className='mt-10 px-10  grid grid-cols-1 md:grid-cols-2 gap-20 mb-20'>
   {currentProducts?.map((product) => (
     <Product
       key={product._id}
       products={product}
       colorVariants={product.colorVariants}
       sizeVariants={product.sizeVariants}
     ></Product>
   ))}
   <div className="mt-4 flex justify-center ">
     {/* Pagination buttons */}
     {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
     <p key={index} className="">
     <button
     
     className={`px-4 py-2 mx-2 ${
       index + 1 === currentPage ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-700'
     }`}
     onClick={() => setCurrentPage(index + 1)}
   >
     {index + 1}
   </button>
     </p>
     ))}
   </div>
 </div>
   </div>
  );
};

export default Products;
