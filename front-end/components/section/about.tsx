import React from 'react';
import {Card} from "@nextui-org/card";

const ProductDesc = () => {
  return (
    <div className=" h-screen min-w-full py-12 px-4 sm:px-6 lg:px-8 ">
      <div className=" mx-auto ">
        <h1 className="text-3xl font-semibold text-start text-gray-900 mb-8 dark:text-gray-100">View the product in action</h1>
        <Card className=' md:h-1/2 h-1/5'>
        <iframe width="100%" height="500" 
        src="https://www.youtube.com/embed/_LmrYQ3AYak?si=M7_ns22SGOAiG2lW?controls=0&showinfo=0" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
        </Card>
        
      </div>
    </div>
  );
};

export default ProductDesc;
