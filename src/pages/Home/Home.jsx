import React from 'react';
import Products from '../Products/Products';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import Gallery from '../Gallery/Gallery';
const Home = () => {
    return (
        <div className="">
        <section className="bg-white" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <div className="grid md:grid-cols-2 gap-5 p-4">
        <div className=" mt-10 md:mt-32">
        <h2 className='text-4xl ml-10 mr-10 text-gray-600 '>More Shopping</h2>
        <h2 className='ml-10 mr-10 text-gray-600 mt-4'>The Product Pages shirt is a contemporary fashion statement designed for both comfort and style. Crafted from high-quality cotton, it offers a soft and breathable feel ideal for daily wear. Its versatile design, with a variety of color options and a classic fit,The shirt features a timeless appeal, making it suitable for various occasions, from casual outings to more refined settings. 
        </h2>
       <div className='ml-10 mr-10'>
       <button  className='bg-purple-500 p-3 w-40  rounded-md mt-8 text-white font-bold  '>Buy A Product</button>
       </div>
        </div>
        <div className="mt-10">
        <AwesomeSlider animation="cubeAnimation">
        <div><img src="https://images.unsplash.com/photo-1646837651873-bd4414977e17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9kZHl8ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div><img src="https://media.istockphoto.com/id/488160041/photo/mens-shirt.webp?b=1&s=170667a&w=0&k=20&c=_3hj6znUuyz-c2qCl60Aj3p-tT8dKhyje_QrosmUzkE=" alt="" /></div>
        <div><img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div><img src="https://media.istockphoto.com/id/1450294473/photo/blank-black-and-white-t-shirt-mockup-flat-lay-top-view.webp?b=1&s=170667a&w=0&k=20&c=I9-Btvx-7vQ-EKXzu4CkCYoIGIeKEan4_kZWV65rIF0=" alt="" /></div>
        <div><img src="https://images.unsplash.com/photo-1542574621-e088a4464f7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbnR8ZW58MHx8MHx8fDA%3D" alt="" /></div>
      </AwesomeSlider>
        </div>
        </div>
          </section>
        <Products></Products>
        
        <Gallery></Gallery>
        </div>
    );
};

export default Home;