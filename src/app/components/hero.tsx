"use client"
import { JetBrains_Mono } from "next/font/google"
import { createRef, useCallback, useEffect, useRef } from "react"
import Image from "next/image"

const jbm = JetBrains_Mono({ subsets: ["latin"] })


export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const drawCall = useCallback(draw, [])
    const resizeCall = useCallback(handleResize, [drawCall])
    useEffect(() => {
        window.addEventListener("resize", () => handleResize());
        resizeCall()
    })

    function handleResize() {
        //console.log("resize!")
        if(canvasRef.current) {
            const parent = canvasRef.current.parentElement;

            if(parent) {
                const rect = parent.getBoundingClientRect()
                canvasRef.current.width = rect.width;
                canvasRef.current.height = rect.height;
            }
        }
        drawCall()
    }

    function draw() {
        const canvas = canvasRef.current;
        if(canvas) {
            const context = canvas.getContext("2d");
            context?.clearRect(0, 0, canvas.width, canvas.height)
            context!.strokeStyle = "#fbbf24"
            
            context!.translate(canvas.width+20, canvas.height/2);
            let size: number = 20
            for(var i = 0; i < 200; i++) {
                size*=(Math.sqrt(2.0)/1.3);
                context!.strokeRect(-size/2, -size/2, size, size)
                context!.rotate(Math.PI/32);
                context!.lineWidth = 2;

            }
        }
    }

    return <main className="bg-gray-900 relative border-y-2 border-y-yellow-600 min-h-96 overflow-hidden" style={{height: "66vh"}}>
        <canvas onResize={resizeCall} ref={canvasRef} className="relative top-0 left-0"> </canvas>
        <div className="flex flex-row items-center z-20 absolute top-0 left-0 w-full h-full p-8 bg-opacity-50 bg-slate-950 md:bg-opacity-100 md:bg-transparent md:bg-gradient-to-l md:via-90% md:via-slate-900 md:from-transparent md:to-slate-900">
            <div className="md:w-1/2 w-full">
                <p className={`${jbm.className} text-slate-200 text-sm mb-1`}>05/04/2024</p>
                <h1 className={`${jbm.className} text-6xl md:text-8xl font-bold mb-1`}>CInT</h1>
                <p className="text-sm md:text-base text-amber-300 font-bold">Competitive Informatics Tournament</p>
                <p className={`${jbm.className} text-slate-400 text-xs`}>Compete, Learn, and Win Prizes!</p>
                <div className="flex flex-row mt-4 gap-2">
                    <button disabled={true} className={`${jbm.className} btn-primary`}>Register (Coming Soon...)</button>
                    {/* <a className={`${jbm.className} btn-primary`}  href="https://docs.google.com/forms/d/e/1FAIpQLSeeC-h3OTe2GSN3e6pkJ3feinun5dQy8oQoBhUwVXs5WFh2Rg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Register</a> */}
                    <a className={`${jbm.className} btn-secondary bg-blurple hover:bg-blurple-accent border-blurple hover:border-blurple-accent`} href="https://discord.gg/F2cHnv4vXd" target="_blank" rel="noopener noreferrer">Discord</a>
                </div>
            </div>
        </div>
    </main>
}