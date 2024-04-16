import { motion } from "framer-motion";

interface HeaderButtonProps {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
    isActive,
    setIsActive
}) => {
    return (
        <div
            onClick={() => {setIsActive(!isActive)}} 
            className="h-10 w-24 bg-green-500 rounded-3xl cursor-pointer relative overflow-hidden"
        >
            <motion.div 
                className="relative w-full h-full"
                animate={{top: isActive ? "-100%" : "0"}} 
                transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
            >
                <div className="w-full h-full bg-green-400 text-black flex items-center justify-center uppercase">
                    <p>
                        Menu
                    </p>
                </div>
                <div className="w-full h-full bg-black text-white flex items-center uppercase justify-center absolute top-full">
                    <p>
                        Close
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
 
export default HeaderButton;