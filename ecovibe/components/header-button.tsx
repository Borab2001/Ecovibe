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
            <div className="">
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
            </div>
        </div>
    );
}
 
export default HeaderButton;