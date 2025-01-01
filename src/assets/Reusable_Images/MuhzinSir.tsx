import image from "../Images/Thumbnail.png";

type Props = {
    width?: string;
    height?: string;
    radius?: string;
};

function MuhzinSir({ width, height, radius }: Props) {
    return (
        <div>
            <img
                className=""
                src={image}
                alt="Thumbnail"
                style={{
                    width: width || "100px", // Use default if width is not provided
                    height: height || "100px", // Use default if height is not provided
                    borderRadius: radius || "0px", // Use default if radius is not provided
                }}
            />

        </div>
    );
}

export default MuhzinSir;
