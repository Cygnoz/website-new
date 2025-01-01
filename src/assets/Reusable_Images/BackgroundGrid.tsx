import grid from '../Images/backgroundGrid.svg'


type Props = {
  width?: string;
  height?: string;
  radius?: string;
};

function BackgroundGrid({ width, height, radius}: Props) {
  return (
    <div>
      <img src={grid}
       alt="Grid"
       style={{
           width: width || "100px", // Use default if width is not provided
           height: height || "100px", // Use default if height is not provided
           borderRadius: radius || "0px", // Use default if radius is not provided
           zIndex: -1,
           backgroundSize: 'cover', // Or adjust based on your design
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center',
           position: 'fixed',
           top: 0,
           left: 0,
       }} />
    </div>
  )
}

export default BackgroundGrid