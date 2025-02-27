"use client";
/* eslint-disable react/no-unescaped-entities */
import Photo from '@/components/Photo';
import Socails from '@/components/Socails';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";

const Home = (props) => {
  const handleDownload = () => {
    // Create a link element, set its href to the CV URL, and click it to initiate the download
    const link = document.createElement('a');
    link.href = '/Rashadul Islam updated cd.pdf'; // Update with the actual path to your CV
    link.download = 'Rashadul_Islam_CV.pdf'; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className='h-full'>
      <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
            <div className='text-center xl:text-left order-2 xl:order-none'>
              <span className='text-xl'>Junior Web Developer</span>
              <h1 className='h1 mb-6'>
                hello I'm <br /> <span className='text-accent'>Rashadul Islam</span>
              </h1> 
              <p className="max-w-[510px] mb-9 text-white/80">
              I’m a Junior Frontend Web Developer passionate about creating error-free websites with a focus on 100% client satisfaction. I love learning new technologies to stay ahead in the field.
              </p>
                {/* btn and socials */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button
                   variant="outline"
                   size="lg"
                   className="uppercase flex items-center gap-2"
                   onClick={handleDownload}
                  >
                        <span>Download CV</span>
                <FiDownload className="text-xl" />
                  </Button>
                 <div className='mb-8 xl:mb-0'>
                  <Socails 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                  </div>
                </div>
            </div>
            <div className='order-1 xl:order-none mb-8 xl:mb-0 py-10'>
              <Photo/>
            </div>
          </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;