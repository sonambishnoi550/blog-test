import React from "react";
interface CustomButtonProps {
    text: string;
    myClass?: string;

}
const CustomButton: React.FC<CustomButtonProps> = ({ text, myClass = "" }) => {
    return (
        <button
            className={`font-semibold whitespace-nowrap rounded-[72px] border border-sky text-sky hover:bg-sky hover:text-black transition-all duration-700 ease-in-out text-base ${myClass}
`}> {text}</button>
    );
};
export default CustomButton;