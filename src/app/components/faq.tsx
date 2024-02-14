import { JetBrains_Mono } from 'next/font/google'
import Placeholder from './placeholder'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Faq() {
    return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-amber-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 02.</p>
            <h1 className={`${jbm.className} text-amber-300 text-5xl`}>FAQ</h1>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-1'>
            <Placeholder content='Under Construction...'></Placeholder>
        </div>
    </div>
}