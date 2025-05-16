import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SignIn = () => {
    const formRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }
        );
    }, []);
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div
                ref={formRef}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 sm:p-10 space-y-6"
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center">Login</h2>
                <form className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
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
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="flex justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox text-indigo-600" />
                            Remember me
                        </label>
                        <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500">
                    Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;