"use client";

import HeaderButton from "@/components/ui/header-button";
import Nav from "@/components/ui/header-nav";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Header = () => {

    const getDefaultSize = () => {
        if (typeof window !== "undefined") {
            return {
                width: window.innerWidth > 480 ? 464 : 'calc(100vw - 16px)',
                height: window.innerWidth > 480 ? 650 : 650
            };
        }
        // Return default size if window is not defined (e.g., during SSR)
        return {
            width: 'calc(100vw - 16px)',
            height: 650
        };
    };

    const [size, setSize] = useState({
        width: window.innerWidth > 480 ? 464 : 'calc(100vw - 16px)',
        height: window.innerWidth > 480 ? 650 : 650
    });
    
    const variants = {
        open: {
            width: size.width,
            height: size.height,
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

    const handleResize = () => {
        setSize(getDefaultSize());
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isActive, setIsActive] = useState(false);

    return (
        <header className="fixed right-4 top-4">
            <motion.div 
                className="bg-green-400 relative rounded-3xl"
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