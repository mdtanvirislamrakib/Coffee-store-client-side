import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLoaderData } from 'react-router';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';

// Framer motion variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const rowVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const UserProfile = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);

    // Placeholder handlers (you can replace with real logic)
    const handleView = (user) => {
        console.log('View user:', user);
    };

    const handleEdit = (user) => {
        console.log('Edit user:', user);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            const remainingUsers = users.filter(user => user._id !== id)
                            setUsers(remainingUsers)

                            // TODO delete user from firebase


                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] p-8">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-x-auto">
                <h2 className="text-2xl font-bold text-gray-800 px-6 pt-6">User Management</h2>

                <motion.table
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full table-auto text-left mt-4"
                >
                    <thead>
                        <tr className="text-gray-600 bg-gray-100 border-b">
                            <th className="py-3 px-6">User</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Phone</th>
                            <th className="py-3 px-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <motion.tr
                                key={user._id}
                                variants={rowVariant}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="py-4 px-6 flex items-center gap-3">
                                    <img
                                        src={user.photo}
                                        alt={user.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <span className="font-medium text-gray-800">{user.name}</span>
                                </td>
                                <td className="py-4 px-6 text-gray-600">{user.email}</td>
                                <td className="py-4 px-6">
                                    <span className="text-sm px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
                                        {user.phone}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <div className="flex justify-end gap-3">
                                        <button
                                            onClick={() => handleView(user)}
                                            className="text-blue-600 hover:text-blue-800"
                                            title="View"
                                        >
                                            <Eye size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleEdit(user)}
                                            className="text-green-600 hover:text-green-800"
                                            title="Edit"
                                        >
                                            <Pencil size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Delete"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </motion.table>

                <div className="p-6 text-sm text-gray-500">Total Users: {users.length}</div>
            </div>
        </div>
    );
};

export default UserProfile;
