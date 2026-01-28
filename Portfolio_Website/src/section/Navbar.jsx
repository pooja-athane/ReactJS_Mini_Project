import { useState } from "react"
import { motion } from "framer-motion";

 function Navigation(){
    return(
        <ul className="nav-ul">
            <li className="nav-li">
                <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-li">
                <a href="#about" className="nav-link">about</a>
            </li>
            <li className="nav-li">
                <a href="#work" className="nav-link">work</a>
            </li>
            <li className="nav-li">
                <a href="#contact" className="nav-link">contact</a>
            </li>
        </ul>
    )
}

const Navbar = ()=> {
    const [isOpen, setOpen] = useState(false);

    return(
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:6">
                    <a href="" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">Pooja Athane</a>
                    <button className="flex cursor-pointer text-neutral-400 hover:text-wgite focus:outline-none sm:hidden"
                    onClick={() => setOpen(!isOpen)}
                    >
                     <img 
                     src={isOpen ? "public/assets/close.svg" : "public/assets/menu.svg"} alt=""
                     className="w-6 h-6"/>
                    </button>
                    <div className="hidden sm:flex">
                        <Navigation/>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div 
                className="block overflow-hidden text-center sm:hidden"
                initial={{
                    opacity: 0,
                    x: -10
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                style={{ maxHeight: "100vh"}}
                transition={{ duration: 1}}
                >
                <div className="pb-5">
                    <Navigation/>
                </div>

                </motion.div>
            )}

        </div>
    )
}

export default Navbar