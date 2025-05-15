import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetail = () => {

    const coffeesData = useLoaderData()
    console.log(coffeesData);

    return (
         <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#fefdfc] p-6">
      {/* Coffee Cup Image */}
      <div className="mb-6 md:mb-0 md:mr-10">
        <img
          src={coffeesData.photo} // Replace with the correct image path
          alt="Coffee Cup"
          className="w-48 h-auto object-contain"
        />
      </div>

      {/* Coffee Details */}
      <div className="text-left">
        <h2 className="text-2xl font-semibold text-brown-700 mb-4">Niceities</h2>
        <ul className="text-gray-700 space-y-1">
          <li><strong>Name:</strong> {coffeesData.name}</li>
          <li><strong>price:</strong>{coffeesData.price}</li>
          <li><strong>Supplier:</strong> {coffeesData.supplier}</li>
          <li><strong>Taste:</strong> {coffeesData.taste}</li>
          <li><strong>Quantity:</strong> {coffeesData.quantity}</li>
          <li><strong>Details:</strong> {coffeesData.details}</li>
        </ul>
      </div>
    </div>
    );
};

export default CoffeeDetail;