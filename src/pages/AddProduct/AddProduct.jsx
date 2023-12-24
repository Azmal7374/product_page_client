/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/Authprovider";
const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const [colorVariants, setColorVariants] = useState([]);
  const [sizeVariants, setSizeVariants] = useState([]);

  const handleColorChange = (selectedOptions) => {
    setColorVariants(selectedOptions);
  };

  const handleSizeChange = (selectedOptions) => {
    setSizeVariants(selectedOptions);
  };


  const onSubmit = data => 
  {
    data.colorVariants = colorVariants.map((color) => color.value);
    data.sizeVariants = sizeVariants.map((size) => size.value);
    
    fetch('http://localhost:5000/addProduct',{
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
    <div className="flex justify-center mt-10 p-8 ">
    <form className="" onSubmit={handleSubmit(onSubmit)}>
    
   <div className="mt-4">
    
   <input className="w-96 p-4 border rounded-md bg-white text-black" {...register("name")} placeholder="Product Name"/>
   </div>
   
    
   <div className="mt-4">
   <input className="w-96 p-4 border rounded-md bg-white text-black" {...register("picture")} placeholder="Product Picture"/>
   </div>

   
    

   <div className="mt-4">
   <textarea className="w-96 p-4 border rounded-md bg-white text-black" {...register("description")} placeholder="Detail Description"/>
   </div>
   <div className="mt-4">
   <CreatableSelect
     isMulti
     options={[
       { value: 'red', label: 'Red' },
       { value: 'green', label: 'Green' },
       { value: 'yellow', label: 'Yellow' },
       { value: 'blue', label: 'Blue' },
       { value: 'pink', label: 'Pink' },
       { value: 'orange', label: 'Orange' },
       { value: 'white', label: 'White' },
       { value: 'black', label: 'Black' },
     ]}
     placeholder="Select Color Variants"
     onChange={handleColorChange}
   />
 </div>
   <div className="mt-4">
   <CreatableSelect
     isMulti
     options={[
       { value: 'small', label: 'Small' },
       { value: 'extraSmall', label: 'ExtraSmall' },
       { value: 'medium', label: 'Medium' },
       { value: 'large', label: 'Large' },
       { value: 'extralarge', label: 'ExtraLarge' },
     ]}
     placeholder="Select Size Variants"
     onChange={handleSizeChange}
   />
 </div>
    <input className=" bg-purple-500 mt-5 btn-wide p-4 rounded-md text-white font-bold" type="submit" value="Add Product" />
  </form>
    </div>
  );
};

export default AddProduct;
