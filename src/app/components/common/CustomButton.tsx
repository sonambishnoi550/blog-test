import React from "react";
interface CustomButtonProps {
    text: string;
    myClass?: string;
    custonOnClick?: () => void;

}
const CustomButton: React.FC<CustomButtonProps> = ({ text, myClass = "",custonOnClick, }) => {
    return (
        <button
            onClick={custonOnClick}
            className={`font-semibold whitespace-nowrap rounded-[72px] border border-sky text-sky hover:bg-sky hover:text-black transition-all duration-700 ease-in-out text-base ${myClass}
`}> {text}</button>
    );
};
export default CustomButton;