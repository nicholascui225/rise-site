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
        if (canvasRef.current) {
            const parent = canvasRef.current.parentElement;

            if (parent) {
                const rect = parent.getBoundingClientRect()
                canvasRef.current.width = rect.width;
                canvasRef.current.height = rect.height;
            }
        }
        drawCall()
    }

    function draw() {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d");
            context!.strokeStyle = "#22c55e";
            context!.fillStyle = "rgba(50, 180, 100, 0.005)";
    
            context!.translate(canvas.width * 0.8, canvas.height * 0.6);
    
            for (let i = 0; i < 720; i++) {
                const baseSize = 10 * (i + 1.05);
    
                // Ultra-dense core (first 6 hexagons)
                if (i < 6) { // Reduced from 108 to 6
                    // Add 4 micro-hexagons at rotated positions
                    const microSize = baseSize * 0.15; // Smaller relative size
                    for (let k = 0; k < 4; k++) { // More rotations for density
                        context!.save();
                        context!.rotate((Math.PI/8) * k); // Finer rotation
                        
                        context!.beginPath();
                        for (let j = 0; j < 6; j++) {
                            const angle = (Math.PI / 3) * j;
                            const x = microSize * Math.cos(angle);
                            const y = microSize * Math.sin(angle);
                            context!.lineTo(x, y);
                        }
                        context!.closePath();
                        context!.stroke();
                        context!.restore();
                    }
                }
    
                // Original pattern remains unchanged
                const randomSize = baseSize * (1 + Math.random() * 0.05);
                const randomRotation = 0.15 + Math.random() * 0.05;
    
                context!.beginPath();
                for (let j = 0; j < 6; j++) {
                    const angle = (Math.PI / 3) * j;
                    const x = randomSize * Math.cos(angle);
                    const y = randomSize * Math.sin(angle);
                    context!.lineTo(x, y);
                }
                context!.closePath();
    
                context!.stroke();
                context!.fill();
                context!.rotate(randomRotation);
                context!.lineWidth = 1.2 + (150 / (i + 50));
            }
        }
    }

    // function draw() {
    //     const canvas = canvasRef.current;
    //     if (canvas) {
    //         const context = canvas.getContext("2d");
    //         context!.strokeStyle = "#22c55e";
            
    //         // Ultra-subtle fill (same green family)
    //         context!.fillStyle = "rgba(50, 180, 100, 0.005)"; // 0.5% opacity
            
    //         context!.translate(canvas.width * 0.8, canvas.height * 0.6);
            
    //         for (var i = 0; i < 180; i++) {
    //             const size = 25 * (i + 1.2);
                
    //             // 1. Draw stroke first (primary element)
    //             context!.strokeRect(-size / 2, -size / 2, size, size);
                
    //             // 2. Add barely visible fill
    //             context!.fillRect(-size / 2, -size / 2, size, size);
                
    //             context!.rotate(0.35);
                
    //             // Minimal fill evolution
    //             context!.fillStyle = `rgba(50, 180, 100, ${0.003 + (i/180 * 0.012)})`; // 0.3% → 1.5% opacity
                
    //             // Maintain strong stroke width
    //             context!.lineWidth = 1.2 + (150 / (i + 50));
    //         }
    //     }
    // }
    
    // function draw() {
    //     const canvas = canvasRef.current;
    //     if (canvas) {
    //         const context = canvas.getContext("2d");
    //         context?.clearRect(0, 0, canvas.width, canvas.height)
    //         context!.strokeStyle = "#22c55e"

    //         context!.translate(canvas.width + 20, canvas.height / 2);
    //         let size: number = 20
    //         for (var i = 0; i < 200; i++) {
    //             size *= (Math.sqrt(2.0) / 1.3);
    //             context!.strokeRect(-size / 2, -size / 2, size, size)
    //             context!.rotate(Math.PI / 32);
    //             context!.lineWidth = 2;

    //         }
    //     }
    // }

    return <main className="bg-gray-900 relative border-y-2 border-y-green-600 min-h-96 overflow-hidden" style={{ height: "66vh" }}>
        <canvas onResize={resizeCall} ref={canvasRef} className="relative top-0 left-0"> </canvas>
        <div className="flex flex-row items-center z-20 absolute top-0 left-0 w-full h-full p-8 bg-opacity-50 bg-slate-950 md:bg-opacity-100 md:bg-transparent md:bg-gradient-to-l md:via-90% md:via-slate-900 md:from-transparent md:to-slate-900">
            <div className="md:w-1/2 w-full">
                <p className={`${jbm.className} text-slate-200 text-sm mb-1`}>04/02/2025</p>
                <h1 className={`${jbm.className} text-6xl md:text-8xl font-bold mb-1`}>RISE</h1>
                <p className="text-sm md:text-base text-primary-300 font-bold">Research in Science and Engineering Conference</p>
                <p className={`${jbm.className} text-slate-400 text-xs`}>Learn about fascinating research. Develop new passions. Connect with leaders.</p>
                <div className="flex flex-row mt-4 gap-2">
                    {/* <button disabled={true} className={`${jbm.className} btn-primary`}>Register (Coming Soon...)</button> */}
                    <a className={`font-mono btn-primary`} href="https://docs.google.com/forms/d/e/1FAIpQLSdN2Y8Ia2HHhnSjfnNR1OUD_-uVdCE4Wp9KCCzq1VA2x8MJAQ/viewform" target="_blank" rel="noopener noreferrer">Register</a>
                    <a className={`font-mono btn-secondary`} href="mailto:chssnhsboard@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
                </div>
            </div>
        </div>
    </main>
}
