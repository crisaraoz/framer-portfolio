import { useEffect, useState } from "react";	
import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";
import Footer from "../components/Footer";

const Home = () => {
  const [showProjectsBtn, setShowProjectsBtn] = useState(true);
  // Effect to hide button on mobile
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowProjectsBtn(screenWidth > 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hi, I'm a<br /> {" "}
            <span className="text-accent">Software Engineer</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            Experienced in creating scalable and intuitive web applications. Proudly based in Buenos Aires, Argentina.
          </motion.p>
          
          {/* btn 
          {showProjectsBtn && (
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
          )}
           <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex cursor-pointer"
          >
            <ProjectsBtn />
          </motion.h2> 
          */}
          <div className="text-sm absolute bottom-4 left-0 right-0 mb-9 max-lg:mb-14 text-gray-400" >
          <Footer />
          </div>
          
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />
      </div>      
    </div>
  );
};

export default Home;
