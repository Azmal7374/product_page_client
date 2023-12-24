import React from 'react';
import SectionTitle from '../share/SectionTitle/SectionTitle';
 
const Gallery = () => {
   const images = [
       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFnfGVufDB8fDB8fHww",
       "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
       "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
       "https://media.istockphoto.com/id/1471183678/photo/flashlight-disaster-goods.webp?b=1&s=170667a&w=0&k=20&c=khNHOcJbsSvIyR-TSknXFqYG0v9z3pGNTuAsQ23_HF4=",
       "https://media.istockphoto.com/id/1328818226/photo/battery-powered-white-table-fan-isolated-on-white-background-with-clipping-path-portable.webp?b=1&s=170667a&w=0&k=20&c=wo-ckOkc7jIOtrSCjgGdBgggHhsfe-BRyoQPvLWhiHc=",
       "https://media.istockphoto.com/id/1566472661/photo/tungsten-bulb-fluorescent-bulb-and-led-bulb.webp?b=1&s=170667a&w=0&k=20&c=2S93Nb-4hsUhpldCjhqpmWd9VGUvwf1HzAGFRkbl5pQ=",
       "https://media.istockphoto.com/id/1440104838/photo/3d-podium-display-christmas-background-for-cosmetic-product-presentation-or-text-christmas.webp?b=1&s=170667a&w=0&k=20&c=EXnsm6IVv4pNGpWP5nPDQp7goFvVDM07u2mltxYCxNc=",
       "https://media.istockphoto.com/id/482949611/photo/blank-white-t-shirt-front-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=3LWr69Wi3GsfoeCkMi8PkVtldnJLBg4g7LOFRmiqs2g=",
       "https://media.istockphoto.com/id/943005482/photo/blank-t-shirt-color-black-template-front-and-back-view.webp?b=1&s=170667a&w=0&k=20&c=YXo3BEftZvghnohU0KmWgrBE28hZY9ZjF5CIJXzRZyo=",
       "https://media.istockphoto.com/id/488160041/photo/mens-shirt.webp?b=1&s=170667a&w=0&k=20&c=_3hj6znUuyz-c2qCl60Aj3p-tT8dKhyje_QrosmUzkE=",
       "https://images.unsplash.com/photo-1646837651873-bd4414977e17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9kZHl8ZW58MHx8MHx8fDA%3D",
       
      
     ]
     return (
        
     <div>
     <SectionTitle
        subHeading={"See Our Favourite Products"}
        heading ={" Products GALLERY COLLECTION "}
        >
        </SectionTitle>
     <div className="mt-6 container mx-auto px-5  lg:px-32  ">
         
     <div className="-m-1 flex flex-wrap md:-m-2">
       {images.map((image, index) => (
         <div key="{index}" className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2" data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000">
           <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src={image}/>
         </div>
       ))}
     </div>
   </div>
     </div>
     );
   }

export default Gallery;




