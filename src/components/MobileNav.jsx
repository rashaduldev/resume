"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { Button } from "./ui/button"; 
import { IoClose } from "react-icons/io5"; 
import { motion } from "framer-motion"; 
import { useState } from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import ExtraLogin from "./ExtraLogin";
import { signOut } from "next-auth/react";

const NormalLinks = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
  { name: "dashboard", path: "/dashboard" },
];
const DashboardLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Profile", path: "/services" },
  { name: "Editprofile", path: "/resume" },
  { name: "Projects", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = ({session}) => {  
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in...");
    } else {
      console.log("Signing up...");
    }
  };
  const isDashboard = pathname.startsWith("/dashboard");
  const links = isDashboard ? DashboardLinks : NormalLinks;

  return (
    <>
     <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent className="flex flex-col items-center gap-6 p-6">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="User Avatar"
              width={64}
              height={64}
              className="w-20 h-20 rounded-full mt-32"
            />
          ) : (
            <h1 className="text-2xl font-semibold mt-32">
              {`{dummy avatar}`} <span className="text-accent">.</span>
            </h1>
          )}

          {/* ✅ Render dynamic links based on route */}
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-lg ${pathname === link.path ? "text-accent font-bold" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}

          {session?.user ? (
            <Button onClick={() => signOut()} className="w-full">
              Log out
            </Button>
          ) : (
            <Button onClick={toggleModal} className="w-full">
              Log in
            </Button>
          )}
        </SheetContent>
      </Sheet>

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
            <button className="absolute top-4 right-4 text-white hover:text-gray-400" onClick={toggleModal}>
              <IoClose size={24} />
            </button>

            {/* Form Toggle */}
            <div className="flex justify-center mb-4 mx-[35px] border-none bg-accent rounded-full overflow-hidden relative">
              <Button
                onClick={switchToLogin}
                className={`relative z-10 py-2 px-10 text-sm font-semibold text-white transition-all duration-300 ${isLogin ? "bg-gray-600" : "text-black"}`}
              >
                Log In
              </Button>
              <Button
                onClick={switchToSignup}
                className={`relative z-10 py-2 px-10 text-sm font-semibold text-white transition-all duration-300 ${!isLogin ? "bg-gray-600" : "bg-accent text-black"}`}
              >
                Sign Up
              </Button>
            </div>

            {/* Form Content */}
            {isLogin ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Log In</Button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Confirm Password</label>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Sign Up</Button>
              </form>
            )}

            <ExtraLogin />
            <div className="text-center mt-4">
              <p className="text-sm">
                {isLogin ? "Don’t have an account? " : "Already have an account? "}
                <span onClick={isLogin ? switchToSignup : switchToLogin} className="text-accent cursor-pointer font-medium">
                  {isLogin ? "Sign Up" : "Log In"}
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
