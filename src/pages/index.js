 import Link from "next/link";
 import { motion, useAnimation } from "framer-motion";
 import { useInView } from "react-intersection-observer";
 import React from "react";
 import { useState } from "react";

 const index = () => {

      const { ref, inView } = useInView();
      const controls = useAnimation();

      React.useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

      const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        },

      }
      const [isOpen, setIsOpen] = useState(false)

      const toggle = () => {
        setIsOpen(true)
      }
  return ( 
      <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
       className='min-h-screen overflow-y-hidden '>

          <motion.header
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y:0 }}
           transition={{ duration: 0.8, ease:"easeInOut" }}
           className="flex ">
          <ul className="hidden  sm:flex mx-auto my-20 space-x-10 text-slate-300">
                <li className="">
                   <Link href={'/'} className="hover:bg-slate-700 py-[6px] px-[25px] rounded-[5px]">Home</Link>
                </li>
                <li>
                   <Link href={'/'} className="hover:bg-slate-700 py-[6px] px-[25px]  rounded-[5px]">Skills</Link>
                </li>
                <li>
                   <Link href={'/'} className="hover:bg-slate-700 py-[6px] px-[25px] rounded-[5px]">Portfolio</Link>
                </li>
                <li>
                   <Link href={'/'} className="hover:bg-slate-700 py-[6px] px-[25px] rounded-[5px]">Contact me</Link>
                </li>
            </ul>
            <button value={isOpen} onClick={toggle} className="text-xl sm:hidden mx-auto my-20 bg-white text-black p-[10px] rounded-lg hover:bg-green-500 transition ease-in-out duration-500 hover:text-white">
              &#9776; Menu
            </button>
          </motion.header>
       
          <main className="max-w-[90%] m-auto sm:max-w-[90%]  ">
             <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x:0 }}
              transition={{ duration: 0.8, ease:"easeInOut" }}
              className="mt-10">
                <img 
                className="rounded-full mx-auto h-[220px] w-[220px] "
                src="/bankole.jpg"
                />
             </motion.div>
             <div className="mx-auto my-10 ">
                <motion.h2
                 className="flex mx-auto w-[100%] font-semibold text-6xl lg:text-8xl justify-center sm:font-bold mt-6  sm:text-7xl ">Bankole Ona ara</motion.h2>
                <p className="text-green-400 text-xl flex justify-center mt-9">Front-end devloper</p>
                <p className=" mt-4 text-xl text-slate-300 leading-9 ">A Full Stack Front-end Developer based in New York. Meticulous web developer with over 2 years of front end experience and passion for responsive and mobile-first website design.</p>
                <ul>
                  <Link href={'/'}>
                 
                  </Link>
                </ul>
             </div>
          </main>
      </motion.div>
   );
}
 
export default index;