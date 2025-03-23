"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import ExtraLogin from "./ExtraLogin";
import { signOut } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "@/utils/Register";
import { loginUser } from "@/utils/Login";
import { forgotPassword } from "@/utils/ForgotPassword";
import { Input } from "./ui/input";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
import duyymimg from "../../public/assets/dummy-user-profile.webp"

// Validation Schemas
const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const signupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const Header = ({ session }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const router = useRouter();

  // Check login status and decode token on mount
  useEffect(() => {
    setIsClient(true);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserEmail(decoded.email);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
      }
    } else if (session?.user) {
      setIsLoggedIn(true);
      setUserEmail(session.user.email);
    }
  }, [session]);

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserEmail(null);
    setIsMobileMenuOpen(false);

    if (session?.user) {
      signOut({ callbackUrl: "/" });
    } else {
      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have been logged out successfully!",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        router.push("/");
      });
    }
  };

  // Form Submit Handler
  const onSubmit = async (data) => {
    try {
      if (isForgotPassword) {
        const res = await forgotPassword({ email: data.email });
        if (res.message) {
          Swal.fire({
            icon: "success",
            title: "Reset Link Sent",
            text: res.message,
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            setIsForgotPassword(false);
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: res.message || "Something went wrong",
          });
        }
      } else if (isLogin) {
        const res = await loginUser({ email: data.email, password: data.password });
        if (res.token) {
          localStorage.setItem("token", res.token);
          const decoded = jwtDecode(res.token);
          setUserEmail(decoded.email);
          setIsLoggedIn(true); // Update state immediately
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You have been logged in!",
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            setIsModalOpen(false);
            router.push("/dashboard");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: res.message || "Invalid credentials",
          });
        }
      } else {
        const res = await registerUser({ email: data.email, password: data.password });
        if (res.token) {
          const decoded = jwtDecode(res.token);
          setUserEmail(decoded.email);
          setIsLoggedIn(true); // Update state immediately (optional: could wait for login)
          Swal.fire({
            icon: "success",
            title: "Signup Successful",
            text: "Account created! Please log in.",
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            setIsLogin(true);
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Signup Failed",
            text: res.message || "Something went wrong",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred",
      });
    } finally {
      reset();
    }
  };

  // Form Handling
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      isForgotPassword ? forgotPasswordSchema : isLogin ? loginSchema : signupSchema
    ),
  });

  return (
    <>
      <header className="pb-6 xl:pb-8 text-white bg-primary">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <Image
              className="w-32 h-32 xl:w-40 xl:h-40"
              src={logo}
              alt="Website Logo"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Nav session={session} isLoggedIn={isLoggedIn} userEmail={userEmail} /> {/* Pass isLoggedIn and userEmail */}
            {isLoggedIn || session?.user ? (
              <div className="relative">
                <Image
                  src={session?.user?.image || duyymimg}
                  alt="User Image"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
                {isMobileMenuOpen && (
                  <div className="absolute z-10 top-12 right-0 bg-white text-black p-4 shadow-lg rounded-md w-56 max-w-xs mt-2">
                    <p className="font-semibold text-lg">{session?.user?.name || "User"}</p>
                    <p className="text-sm text-gray-600">{userEmail || session?.user?.email || "Email not available"}</p>
                    <Button
                      onClick={handleLogout}
                      className="w-full mt-4 py-2 text-sm font-medium text-black bg-accent rounded-md hover:bg-primary-dark"
                    >
                      Log Out
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                onClick={() => setIsModalOpen(true)}
                className="py-2 px-6 text-sm font-medium text-black bg-accent rounded-md hover:bg-primary-dark"
              >
                Log In
              </Button>
            )}
          </div>

          <div className="xl:hidden">
            <MobileNav session={session} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            {isMobileMenuOpen && (
              <Button onClick={() => setIsModalOpen(true)}>Log in</Button>
            )}
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-black text-white rounded-lg shadow-lg w-[90%] max-w-md p-6 border border-accent relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-400"
              onClick={() => setIsModalOpen(false)}
            >
              <IoClose size={24} />
            </button>

            {!isForgotPassword && (
              <div className="flex justify-center mb-4 mx-[70px] bg-accent rounded-full overflow-hidden relative">
                <Button
                  onClick={() => setIsLogin(true)}
                  className={`py-2 px-10 text-sm font-semibold ${isLogin ? "bg-gray-600" : "text-black"}`}
                >
                  Log In
                </Button>
                <Button
                  onClick={() => setIsLogin(false)}
                  className={`py-2 px-10 text-sm font-semibold ${!isLogin ? "bg-gray-600" : "text-black"}`}
                >
                  Sign Up
                </Button>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email Address</label>
                <Input
                  {...register("email")}
                  className="w-full mt-1 p-2 border rounded text-black"
                  placeholder="Enter your email"
                />
                <p className="text-red-500 text-xs">{errors.email?.message}</p>
              </div>

              {!isForgotPassword && (
                <>
                  <div className="mb-4 relative">
                    <label className="block text-sm font-medium">Password</label>
                    <Input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      className="w-full mt-1 p-2 border rounded text-black"
                      placeholder="Enter your password"
                    />
                    <span
                      className="absolute right-3 top-9 cursor-pointer text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                    </span>
                    <p className="text-red-500 text-xs">{errors.password?.message}</p>
                  </div>
                  {isLogin && (
                    <div className="mb-4 text-right">
                      <button
                        type="button"
                        onClick={() => setIsForgotPassword(true)}
                        className="text-sm text-accent hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  )}
                  {!isLogin && (
                    <div className="mb-4 relative">
                      <label className="block text-sm font-medium">Confirm Password</label>
                      <Input
                        {...register("confirmPassword")}
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full mt-1 p-2 border rounded text-black"
                        placeholder="Confirm your password"
                      />
                      <span
                        className="absolute right-3 top-9 cursor-pointer text-gray-600"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                      </span>
                      <p className="text-red-500 text-xs">{errors.confirmPassword?.message}</p>
                    </div>
                  )}
                </>
              )}

              <Button type="submit" className="w-full">
                {isForgotPassword ? "Send Reset Link" : isLogin ? "Log In" : "Sign Up"}
              </Button>

              {isForgotPassword && (
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setIsForgotPassword(false)}
                    className="text-sm text-accent hover:underline"
                  >
                    Back to Login
                  </button>
                </div>
              )}
            </form>

            {!isForgotPassword && <ExtraLogin />}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Header;