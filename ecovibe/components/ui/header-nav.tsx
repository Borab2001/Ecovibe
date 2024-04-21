import Link from "next/link";

import { motion } from "framer-motion";

const Nav = () => {
    
    const links = [
        {
            name: 'Main Objectives',
            url: '/main-objectives',
        },
        {
            name: 'Situation',
            url: '/situation',
        },
        {
            name: 'Partners',
            url: '/partners',
        },
        {
            name: 'Be Circular',
            url: '/be-circular',
        },
        {
            name: 'Raw Materials',
            url: '/raw-materials',
        },
    ];

    const animated = {
        initial: {
            opacity: 0,
            translateY: 80,
            translateX: -20
        },
        enter: (index: number) => ({
            opacity: 1,
            translateY: 0,
            translateX: 0,
            transition: {
                duration: 0.65,
                delay: 0.5 + (index * 0.1),
                ease: [0.215, 0.61, 0.355, 1]
            }
        }),
        exit: {
            opacity: 0
        }
    }

    return (
        <nav className="h-full pt-24 px-10 pb-12 box-border">
            <div className="flex flex-col gap-4">
                {links.map((link, index) => (
                    <div
                        key={index}
                    >
                        <motion.div 
                            
                            className="text-4xl text-black hover:text-black"
                            custom={index}
                            variants={animated}
                            animate="enter"
                            exit="exit"
                            initial="initial"
                        >
                            <Link href={link.url}>
                                {link.name}
                            </Link>
                        </motion.div>
                    </div>
                ))}
            </div>
        </nav>
    );
}
 
export default Nav;