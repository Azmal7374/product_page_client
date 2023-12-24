import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';

const ProductDetailsPage = () => {
   

  const products =useLoaderData()
    const {_id, name,description ,picture,sizeVariants,colorVariants} =products;
    console.log(products);


    

    const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Function to handle color change
  const handleColorChange = (selectedOption) => {
    setSelectedColor(selectedOption);
  };

  // Function to handle size change
  const handleSizeChange = (selectedOption) => {
    setSelectedSize(selectedOption);
  };


  const onSubmit = data => 
  {
    data.colorVariants = colorVariants.map((color) => color.value);
    data.sizeVariants = sizeVariants.map((size) => size.value);
    
    fetch('http://localhost:5000/addToCart',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res =>res.json())
      .then(result=>{
        console.log(result);
        if(result.insertedId){
          toast('Successfully Added!')
        }
      })
    console.log(data);
  }
  


  return (
    <div className="w-4/5 mx-auto mt-8">
     <div className=''>
     <img src={ picture} alt={ name} className="mb-2 w-3/5 h-4/5 mx-auto " />
     <div>
     <h1 className="text-3xl font-bold mb-4">{ name}</h1>
     <p className="text-lg font-semibold    ">Product Description:</p>
     <hr className='border border-purple-500 w-40' />
     <p className="text-gray-500 mb-4 mt-4">{ description}</p>
     </div>
     </div>
        <div >
       

          <div className="md:flex gap-20 ">
          <div className="mb-4 md:w-1/2">
            <p className="text-lg font-semibold">Select Color:</p>
            <Select
              options={colorVariants.map((color) => ({ value: color, label: color }))}
              value={selectedColor}
              onChange={handleColorChange}
              placeholder="Select Color"
            />
          </div>

          <div className="mb-4 md:w-1/2">
            <p className="text-lg font-semibold">Select Size:</p>
            <Select
              options={sizeVariants.map((size) => ({ value: size, label: size }))}
              value={selectedSize}
              onChange={handleSizeChange}
              placeholder="Select Size"
            />
          </div>
          </div>

       <p className="text-center mt-5 mb-4">
       <button
       className="bg-purple-500 text-white px-6 py-2 rounded-md font-semibold"
       onClick={onSubmit}
     >
       Add to Cart
     </button>
       </p>
        </div>
      </div>
  );
   
};

export default ProductDetailsPage;
