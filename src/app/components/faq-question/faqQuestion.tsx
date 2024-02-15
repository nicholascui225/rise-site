"use client"

import { useState } from "react"
import { JetBrains_Mono } from "next/font/google"

const jbm = JetBrains_Mono({ subsets: ["latin"] })


type Props = {
    question: string,
    answer: string
}

export default function FaqQuestion(props: Props) {
    let [expanded, setExpanded] = useState(false)

    return (
        <div className={`border-2 border-gray-700 bg-gray-900 flex flex-col`}>
            <div className={`${jbm.className} bg-gray-800 p-2 hover:bg-gray-700 flex`} onClick={() => setExpanded(!expanded)}>
                <button className="flex-1 text-left">{props.question}</button>
                <span>{expanded ? "[-]" : "[+]"}</span>
            </div>
            
            <div className={`${expanded ? 'block' : 'hidden'} p-2`}>
                <p>{props.answer}</p>
            </div>
        </div>
    )
}