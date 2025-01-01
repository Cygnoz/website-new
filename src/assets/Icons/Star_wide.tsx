type Props = { color?: string; size?: string };

const Star_wide = ({ color, size }: Props) => {
  return (
    <div>
        <svg width={size?size:"44"}
        height={size?size:"44"}viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 0.477783L22.372 10.4203C22.5996 16.5031 27.5273 21.3814 33.6688 21.6038L44 21.9778L33.6688 22.3518C27.5273 22.5741 22.5996 27.4524 22.372 33.5352L22 43.4778L21.628 33.5352C21.4004 27.4524 16.4727 22.5741 10.3312 22.3518L0 21.9778L10.3312 21.6038C16.4726 21.3814 21.4004 16.5031 21.628 10.4203L22 0.477783Z" fill={color?color:"#0099F8"}/>
    </svg>
    </div>
  )
}

export default Star_wide