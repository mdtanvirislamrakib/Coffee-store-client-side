import React from 'react';

const AddCoffee = () => {
    return (
        <div className='add-coffee-bg min-h-screen'>
            <div className='card-bg py-10 lg:py-14'>
                <div className='text-center md:w-7/12 w-full mx-auto space-y-5'>
                    <h1 className='text-3xl lg:text-6xl rancho'>Add Coffee</h1>
                    <p className='raleway'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <form className='w-full md:w-10/12
                 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <fieldset className="fieldset ">
                            <label className='text-sm md:text-lg font-bold'>Page title</label>
                            <input type="text" className="input w-full focus:outline-none focus:border-none focus:shadow-2xs" placeholder="My awesome page" />

                            <label className='text-sm md:text-lg font-bold'>Page title</label>
                            <input type="text" className="input w-full focus:outline-none focus:border-none focus:shadow-2xs" placeholder="My awesome page" />

                            <label className='text-sm md:text-lg font-bold'>Page title</label>
                            <input type="text" className="input w-full focus:outline-none focus:border-none focus:shadow-2xs" placeholder="My awesome page" />

                        </fieldset>

                        <fieldset className="fieldset ">
                            <label className='text-sm md:text-lg font-bold'>Page title</label>
                            <input type="text" className="input w-full focus:outline-none focus:border-none focus:shadow-2xs" placeholder="My awesome page" />

                            <label className='text-sm md:text-lg font-bold'>Page title</label>
                            <input type="text" className="input w-full focus:outline-none focus:border-none focus:shadow-2xs" placeholder="My awesome page" />

                            <label className='text-sm md:text-lg font-bold'>Page title</label>
                            <input type="text" className="input w-full focus:outline-none focus:border-none focus:shadow-2xs" placeholder="My awesome page" />

                        </fieldset>
                    </div>
                    <div className='space-y-5'>
                        <label className='text-sm md:text-lg font-bold'>Page title</label>
                        <input type="text" className="input w-full focus:outline-none focus:border-none focus:shadow-2xs" placeholder="My awesome page" />

                        <input type="submit" value="Add Coffee" className="w-full focus:outline-none focus:border-none bg-[#D2B48C] py-2 font-bold rancho cursor-pointer hover:bg-[rgba(158,103,32,0.72)] transition-all text-lg" />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddCoffee;