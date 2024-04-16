interface HeaderButtonTextProps {
    label: string;
}

const HeaderButtonText: React.FC<HeaderButtonTextProps> = ({
    label
}) => {
    return (
        <div className="w-full h-full flex items-center justify-center duration-700 transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] preserve-3d group-hover:[transform:rotateX(90deg)]">
            <p className="transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-0 group-hover:[transform:translateY(-100%)]">{label}</p>
            <p className="absolute opacity-0 origin-bottom-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] [transform:rotateX(-90deg)] group-hover:opacity-100">{label}</p>
        </div>
    );
}
 
export default HeaderButtonText;

