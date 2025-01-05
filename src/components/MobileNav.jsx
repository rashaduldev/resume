"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { Button } from "./ui/button"; // Import your button component

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = ({ setIsMobileMenuOpen }) => {
  const pathname = usePathname();

  const handleLoginButtonClick = () => {
    // Logic for handling login button click, for example, opening a modal
    console.log("Login button clicked");
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">Rashadul <span className="text-accent">.</span></h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Login Button */}
        <div className="mt-8 text-center">
          <Button onClick={handleLoginButtonClick} className="text-xl py-2 px-4 bg-accent text-white rounded">
            Log in
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
