interface HeaderButtonTextProps {
    label: string;
}

const HeaderButtonText: React.FC<HeaderButtonTextProps> = ({
    label
}) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <p>{label}</p>
            <p className="absolute [transform:rotateX(90deg)]">{label}</p>
        </div>
    );
}
 
export default HeaderButtonText;

