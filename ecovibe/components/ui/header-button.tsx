import { motion } from "framer-motion";
import HeaderButtonText from "./header-button-text";

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
            className="h-10 w-24 bg-green-500 rounded-3xl cursor-pointer absolute top-0 right-0 overflow-hidden"
        >
            <motion.div 
                className="relative w-full h-full"
                animate={{top: isActive ? "-100%" : "0"}} 
                transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
            >
                <div className="w-full h-full bg-green-400 text-black uppercase group">
                    <HeaderButtonText label="Menu" />
                </div>
                <div className="w-full h-full bg-black text-white uppercase absolute top-full group">
                    <HeaderButtonText label="Close" />
                </div>
            </motion.div>
        </div>
    );
}
 
export default HeaderButton;