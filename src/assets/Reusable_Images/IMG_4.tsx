import image from "../Images/Thumbnail3.svg";

type Props = {
    width?: string;
    height?: string;
    radius?: string;
};

function IMG_4({width, height, radius }: Props) {
  return (
    <div>
         <img
                className=""
                src={image}
                alt="Thumbnail3"
                style={{
                    width: width || "100px", // Use default if width is not provided
                    height: height || "100px", // Use default if height is not provided
                    borderRadius: radius || "10px", // Use default if radius is not provided
                }}
            />
    </div>
  )
}

export default IMG_4