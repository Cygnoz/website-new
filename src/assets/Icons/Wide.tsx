type Props = { color?: string; size?: string };

const Wide = ({ color, size }: Props) => {
  return (
    <div>
        <svg width={size?size:"44"}
        height={size?size:"44"}viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 0L22.372 9.94255C22.5996 16.0254 27.5273 20.9037 33.6688 21.126L44 21.5L33.6688 21.874C27.5273 22.0963 22.5996 26.9746 22.372 33.0575L22 43L21.628 33.0575C21.4004 26.9746 16.4727 22.0963 10.3312 21.874L0 21.5L10.3312 21.126C16.4726 20.9037 21.4004 16.0254 21.628 9.94255L22 0Z"  fill={color?color:'#0380CE'}/>
    </svg>
    </div>
  )
}

export default Wide