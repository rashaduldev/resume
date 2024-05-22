import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href={'/'}>
                    {/* <h1 className="text-4xl font-semibold">
                    Rasha <span className="text-accent">.</span>
                    </h1> */}
                    <Image
                    className=""
                    src="https://i.ibb.co/PNyYZ8w/logo-removebg-preview.png"
                    width={200}
                    height={200}
                    alt=""
                    />
                </Link>
                {/* desktop nav amd hire me button  */}
                <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                 <Link href={'/contact'}>
                 <Button>Hire me</Button>
                 </Link>   
                </div>

                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
};

export default Header;