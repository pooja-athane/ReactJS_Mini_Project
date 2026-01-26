import { motion } from "framer-motion"
import { useState } from "react"

function Navigation() {
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#work">Work</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:p-6 ">
                    <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white" href="/">Pooja Athane</a>
                    <button className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none  sm:hiden  "
                        onClick={() => setOpen(!isOpen)}
                    >
                        <img
                            src={isOpen ? "" : ""} alt="" className="w-6 h-6"></img>
                    </button>
                    <div className="hiden sm:flex">
                        <Navigation />
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div className="block overflow-hidden text-center sm:hiden"

                    initial={{
                        opacity: 0,
                        x: -10
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    style={{ maxHeight: "100vh" }}
                    transition={{ duration: 1 }}>
                    <div className="pb-5"
                    >
                        <Navigation />
                    </div>


                </motion.div>
            )}



        </div>

    )
};

export default Navbar