'use client'; // Ensure this is at the top to mark the component as a Client Component

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router (if you're using App Router)
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { Input } from "./ui/input";
import { IoClose } from "react-icons/io5"; // Importing the close icon
import { motion } from "framer-motion"; // Importing framer-motion
import ExtraLogin from "./ExtraLogin";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [isSuccess, setIsSuccess] = useState(false); // State for success modal

  const [isClient, setIsClient] = useState(false); // To check if it's client-side rendering
  const router = useRouter(); // Using next/navigation for App Router (for Next.js 13+)

  useEffect(() => {
    setIsClient(true); // Set isClient to true after the component mounts
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const switchToSignup = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      if (formData.email === "user@example.com" && formData.password === "password") {
        setIsSuccess(true);
        setTimeout(() => {
          router.push("/dashboard"); // Redirect to dashboard after successful login
        }, 2000);
      }
    } else {
      // Handle signup logic
      if (formData.password === formData.confirmPassword) {
        setIsSuccess(true);
        setTimeout(() => {
          switchToLogin(); // Switch to login after successful signup
        }, 2000);
      }
    }
  };

  return (
    <>
      <header className="py-6 xl:py-8 text-white bg-primary">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/">
            <Image
              className="w-32 h-32 xl:w-40 xl:h-40"
              src={logo}
              alt="Website Logo"
            />
          </Link>

          {/* Desktop Nav and Login Button */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Button onClick={toggleModal}>Log in</Button>
          </div>

          {/* Mobile Nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Login/Signup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-black text-white rounded-lg shadow-lg w-[90%] max-w-md p-6 border border-accent relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-400"
              onClick={toggleModal}
            >
              <IoClose size={24} /> {/* Close icon */}
            </button>

            {/* Form Toggle Buttons */}
            <motion.div
              className="flex justify-center mb-4 mx-[70px] bg-accent rounded-full overflow-hidden relative"
              initial={{ opacity: 0, x: isLogin ? 0 : "-100%" }} // Initial position for login button
              animate={{ opacity: 1, x: 0 }} // Animate to 0 position
              exit={{ opacity: 0, x: isLogin ? "100%" : 0 }} // Exit animation
              transition={{ duration: 0.5 }}
            >
              {/* Background Indicator */}
              <motion.div
                className="absolute inset-0 bg-accent rounded-full"
                initial={{ x: isLogin ? 0 : "100%" }} // Slide from right to left
                animate={{ x: isLogin ? 0 : "-100%" }} // Slide to the left when switching
                transition={{ duration: 0.3 }}
              />

              {/* Login Button */}
              <Button
                onClick={switchToLogin}
                className={`relative z-10 py-2 px-10 text-sm font-semibold text-white transition-all duration-300 ${isLogin ? "bg-gray-600 pb-1" : "text-black"}`}
              >
                Log In
              </Button>

              {/* Sign Up Button */}
              <Button
                onClick={switchToSignup}
                className={`relative z-10 py-2 px-10 text-sm font-semibold text-white transition-all duration-300 ${!isLogin ? "bg-gray-600" : "bg-accent text-black"}`}
              >
                Sign Up
              </Button>
            </motion.div>

            {/* Form Content */}
            <motion.div
              key={isLogin ? "login" : "signup"}
              initial={{ x: isLogin ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isLogin ? "-100%" : 0 }}
              transition={{ duration: 0.5 }}
            >
              {isLogin ? (
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium">
                        Password
                      </label>
                      <Input
                        type="password"
                        id="password"
                        className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          className="mr-2 rounded border-gray-300 focus:ring-primary"
                        />
                        Remember Me
                      </label>
                      <Link href="" className="text-sm text-accent">
                        Forgot Password?
                      </Link>
                    </div>
                    <Button type="submit" className="w-full">
                      Log In
                    </Button>
                  </form>
                  {/* Extra Login */}
                 <ExtraLogin/>
                  <div className="text-center mt-4">
                    <p className="text-sm">
                      Don’t have an account?{" "}
                      <a onClick={switchToSignup} className="text-accent cursor-pointer font-medium">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium">
                        Password
                      </label>
                      <Input
                        type="password"
                        id="password"
                        className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="confirm-password" className="block text-sm font-medium">
                        Confirm Password
                      </label>
                      <Input
                        type="password"
                        id="confirm-password"
                        className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign Up
                    </Button>
                  </form>
                  <ExtraLogin/>
                  <div className="text-center mt-4">
                    <p className="text-sm">
                      Already have an account?{" "}
                      <a onClick={switchToLogin} className="text-accent cursor-pointer font-medium">
                        Log In
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Header;
