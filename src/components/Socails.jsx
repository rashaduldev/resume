import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/rashaduldev" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rashaduldev" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@rashadul_dev" },
  { icon: <FaTwitter />, path: "https://x.com/rashaduldev" }
];

const Socails = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socails;
