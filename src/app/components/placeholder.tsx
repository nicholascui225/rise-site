type Props = {
    className?: string
    content?: string
}

import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Placeholder(props: Props) {
    return <main className="w-full min-h-80 h-ful rounded-md constructionStripes flex justify-center items-center">
        <h1 className={`${jbm.className} text-2xl font-bold text-slate-100 rounded p-1 text-center`}>{props.content}</h1>
    </main>
}