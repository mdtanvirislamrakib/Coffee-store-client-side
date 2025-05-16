import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const SignUp = () => {

    const { createUser } = use(AuthContext)
    console.log(createUser);

    const handleSignup = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // create user in firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })


    }


    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 w-full max-w-lg space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Create an Account</h2>
                <form onSubmit={handleSignup} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            required
                            className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                            I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms & Conditions</a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Already have an account? <a href="#" className="text-indigo-600 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;