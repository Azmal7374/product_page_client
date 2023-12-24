import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../share/SectionTitle/SectionTitle';

const products = ({products, sizeVariants, colorVariants}) => {
    console.log(products._id);

    return (
        <div className="container mx-auto ">
        
            
              <div  className="p-4 border border-gray-200 h-full ">
                <img src={products.picture
                } alt={products.name
                }
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
         data-aos-duration="2000"
                 className="mb-2 w-3/4 mx-auto h-32 " />
                <h2 className="font-semibold text-2xl">{products.name
                }</h2>
                <div className='md:flex justify-between mt-2'>
                <div>
                <p className='font-bold text-xl'>Color  :</p>
                <hr className='border-2 border-purple-500 w-14'/>
                <p className="mt-2"> {colorVariants.map((color, index) => 
                    <p key={index} className="text-sm ">{index + 1 }.{color}</p>
                    )
                }</p>
                </div>

                <div className='mt-4 md:mt-0'>
                <p className='font-bold text-xl '>Size  :</p>
                <hr className='border-2 border-purple-500 w-12' />
                <p className="mt-2"> {sizeVariants.map((size, index) => 
                    <p key={index} className="text-sm ">{index + 1 }.{size}</p>
                    )
                }</p>
                </div>
                </div>
                
                
             
              <Link to={`/products/${products._id}`}>
              <p className="text-center">
              <button  className="mt-4 bg-purple-500 text-white px-4 py-2 rounded  ">View Details</button>
              </p>
              </Link>
             
              </div>
           
          </div>
      );
};

export default products;