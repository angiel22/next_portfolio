import { useEffect, useRef } from "react"

export default function TerminalBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()
        window.addEventListener("resize", resize)

        const chars = "01{}[]<>/\\|=+-_abcdefABCDEF#@!~"
        const fontSize = 16
        const rowHeight = 28 // spacing between rows
        const numRows = Math.floor(canvas.height / rowHeight)

        type Row = {
            y: number
            x: number
            speed: number
            chars: string[]
            length: number
            alpha: number
        }

        const rows: Row[] = Array.from({ length: numRows }, (_, i) => ({
            y: i * rowHeight + rowHeight,
            x: Math.random() * canvas.width + canvas.width,
            speed: 2 + Math.random() * 3,
            chars: Array.from({ length: 40 }, () => chars[Math.floor(Math.random() * chars.length)]),
            length: 20 + Math.floor(Math.random() * 30),
            alpha: 0.2 + Math.random() * 0.4,
        }))

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.font = `bold ${fontSize}px monospace`

            rows.forEach((row) => {
                row.x -= row.speed  // ← move left instead of right

                // draw trail going rightward behind the lead char
                for (let i = 0; i < row.length; i++) {
                    const cx = row.x + i * fontSize
                    if (cx < 0 || cx > canvas.width) continue

                    const fade = 1 - i / row.length
                    ctx.fillStyle = `rgba(96, 165, 250, ${row.alpha * fade})`
                    ctx.fillText(row.chars[i % row.chars.length], cx, row.y)
                }

                // reset when fully off screen to the left
                if (row.x + row.length * fontSize < 0) {
                    row.x = canvas.width + row.length * fontSize
                    row.speed = 1.5 + Math.random() * 3
                    row.length = 20 + Math.floor(Math.random() * 30)
                    row.alpha = 0.2 + Math.random() * 0.4
                }
            })
        }

        const interval = setInterval(draw, 40)
        return () => {
            clearInterval(interval)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full rounded-2xl pointer-events-none z-0"
        />
    )
}