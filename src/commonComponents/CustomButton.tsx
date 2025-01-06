import React from "react";

interface CustomButtonProps {
  bgColor?: string;
  hoverBgColor?: string;
  text?: string;
  icon?: string; // Path to the icon
  textColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor = "#0099F8",
  hoverBgColor = "#0089f9",
  text = "Current Openings",
  icon,
  textColor = "white",
}) => {
  return (
    <button
      className={`font-gilroy text-${textColor} font-thin py-1 px-6 rounded-full flex items-center  gap-2 shadow-md ease-in-out`}
      style={{ backgroundColor: bgColor }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    >
      {text}
      {icon && (
        <span className="text-lg justify-center flex">
          <img src={icon} className="w-5 h-6" alt="Icon" />
        </span>
      )}
    </button>
  );
};

export default CustomButton;
