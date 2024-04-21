"use client";

import HeaderButton from "@/components/ui/header-button";
import Nav from "@/components/ui/header-nav";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Header = () => {
    
    const variants = {
        open: {
            width: 480,
            height: 650,
            top: "-8px",
            right: "-8px",
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        closed: {
            width: 96,
            height: 40,
            top: "0px",
            right: "0px",
            transition: {duration: 0.7, delay: 0.2, ease: [0.76, 0, 0.24, 1]}
        }
    }

    const [isActive, setIsActive] = useState(false);

    return (
        <header className="fixed right-4 top-4">
            <motion.div 
                className="w-[480px] header-full bg-green-400 relative rounded-3xl"
                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <HeaderButton isActive={isActive} setIsActive={setIsActive} />
        </header>
    );
}
 
export default Header;