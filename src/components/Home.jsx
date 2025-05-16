import React, { useState } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard ';
import { Coffee } from 'lucide-react';

const Home = () => {
    const initialCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(initialCoffees)


    return (
        <div>
            <div className='addCoffee-bg min-h-screen py-10 lg:py-20 space-y-10'>
                <div className='space-y-10'>
                    <div className='space-y-5'>
                        <h5 className='text-xl text-center text-gray-600 raleway'>--- Sip & Savor ---</h5>
                        <h1 className='rancho text-center lg:text-5xl text-3xl font-bold text-[#331A15]'>Our Popular Products</h1>
                    </div>


                    <div className='flex items-center justify-center'>
                        <Link to={"/addCoffee"} className=' bg-[#E3B577] text-white font-bold border-2 rounded-lg py-3 px-5 text-2xl border-black flex items-center gap-2 justify-center'>Add Coffee <Coffee size={25} /></Link>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:max-w-8/12 w-full mx-auto '>
                    {
                        coffees.map(coffee => <CoffeeCard 
                            key={coffee._id} 
                            coffee={coffee} 
                            coffees = {coffees} 
                            setCoffees = {setCoffees}
                        >
                        </CoffeeCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;