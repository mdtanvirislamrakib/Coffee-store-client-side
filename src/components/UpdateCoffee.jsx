import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const containerRef = useRef(null);
    const inputsRef = useRef([]);
    const formRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );

        gsap.fromTo(
            inputsRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.3,
            }
        );
    }, []);


    // Update coffee data
    const handleUpdateCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form)
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log(updatedCoffee);

        // updated coffee
        fetch(`http://localhost:5000/coffees/${coffee._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log("updated data", data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update Coffee Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className="min-h-screen add-coffee-bg py-12 px-4">
            <div
                ref={containerRef}
                className="max-w-4xl mx-auto bg-[#f4f1ed] shadow-md rounded-xl p-8"
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 rancho mb-3">
                        Update Coffee
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using
                        Content here.
                    </p>
                </div>

                <form onSubmit={handleUpdateCoffee} ref={formRef} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div ref={(el) => (inputsRef.current[0] = el)}>
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter coffee name"
                                defaultValue={coffee.name}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                            />
                        </div>

                        <div ref={(el) => (inputsRef.current[1] = el)}>
                            <label className="block text-gray-700 mb-1">Quantity</label>
                            <input
                                name="quantity"
                                type="number"
                                placeholder="Enter coffee Quantity"
                                defaultValue={coffee.quantity}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b48c] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            />
                        </div>

                        <div ref={(el) => (inputsRef.current[2] = el)}>
                            <label className="block text-gray-700 mb-1">Supplier</label>
                            <input
                                name="supplier"
                                type="text"
                                placeholder="Enter coffee supplier"
                                defaultValue={coffee.supplier}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                            />
                        </div>

                        <div ref={(el) => (inputsRef.current[3] = el)}>
                            <label className="block text-gray-700 mb-1">Taste</label>
                            <input
                                name="taste"
                                type="text"
                                placeholder="Enter coffee taste"
                                defaultValue={coffee.taste}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                            />
                        </div>

                        <div ref={(el) => (inputsRef.current[4] = el)}>
                            <label className="block text-gray-700 mb-1">Price</label>
                            <input
                                name="price"
                                type="number"
                                placeholder="Enter coffee Price"
                                defaultValue={coffee.price}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b48c] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            />
                        </div>

                        <div ref={(el) => (inputsRef.current[5] = el)}>
                            <label className="block text-gray-700 mb-1">Details</label>
                            <input
                                name="details"
                                type="text"
                                placeholder="Enter coffee details"
                                defaultValue={coffee.details}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                            />
                        </div>
                    </div>

                    <div ref={(el) => (inputsRef.current[6] = el)}>
                        <label className="block text-gray-700 mb-1">Photo</label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Enter photo URL"
                            defaultValue={coffee.photo}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                        />
                    </div>

                    <div ref={(el) => (inputsRef.current[7] = el)}>
                        <input
                            type="submit"
                            value="Update Coffee"
                            className="w-full bg-[#d2b48c] text-white font-bold py-2 px-4 rounded-md border border-gray-600 hover:bg-[rgba(158,103,32,0.72)] transition-all duration-300 rancho text-lg cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;