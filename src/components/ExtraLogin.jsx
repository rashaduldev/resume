import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaGoogle, FaFacebook } from "react-icons/fa";

const socials = [
{ icon: <FaGoogle /> },
  { icon: <FaGithub /> },
  { icon: <FaFacebook /> },
  { icon: <FaLinkedinIn /> },
];

const ExtraLogin = () => {
  return (
    <div className="flex flex-row mx-auto justify-center gap-5 my-5 text-xl">
      {socials.map((item, index) => (
        <Link
          key={index}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default ExtraLogin;
