import React from "react";
import { Eye, Edit2, Trash2 } from "lucide-react";

const CoffeeCard = ({coffee}) => {
    const { photo, name, supplier, price } = coffee;
    return (
        <div className="flex items-center justify-between gap-4 p-4 bg-[#F8F6F2] rounded-lg shadow-md max-w-md">
            {/* Coffee Image */}
            <div className="w-24">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover rounded"
                />
            </div>

            {/* Coffee Info */}
            <div className="flex-1 text-sm space-y-1">
                <p>
                    <span className="font-semibold">Name:</span> {name}
                </p>
                <p>
                    <span className="font-semibold">Chef:</span> {supplier}
                </p>
                <p>
                    <span className="font-semibold">Price:</span>{" "}
                    <span className="text-gray-600">{price} Taka</span>
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
                <button className="bg-[#D2B48C] hover:bg-[#c9a36e] p-2 rounded">
                    <Eye className="w-4 h-4 text-white" />
                </button>
                <button className="bg-black hover:bg-gray-800 p-2 rounded">
                    <Edit2 className="w-4 h-4 text-white" />
                </button>
                <button className="bg-red-500 hover:bg-red-600 p-2 rounded">
                    <Trash2 className="w-4 h-4 text-white" />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
