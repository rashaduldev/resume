"use client"
import { signIn } from "next-auth/react";
import { 
  FaGithub, 
  FaGoogle, 
  // FaFacebook,
  // FaLinkedinIn, 
} from "react-icons/fa";

const socials = [
  { icon: <FaGoogle />, provider: "google" },
  { icon: <FaGithub />, provider: "github" },
  // { icon: <FaFacebook />, provider: "facebook" },
  // { icon: <FaLinkedinIn />, provider: "linkedin" },
];

const ExtraLogin = () => {
  return (
    <div className="flex flex-row mx-auto justify-center gap-5 my-5 text-xl">
      {socials.map((item, index) => (
        <button
          key={index}
          onClick={() => signIn(item.provider,{
            callbackUrl:"http://localhost:3000/dashboard" ||"https://rashaduldev.vercel.app/dashboard"
          })}
          className="p-2 rounded-full hover:bg-accent hover:text-black transition"
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default ExtraLogin;
