import { JetBrains_Mono } from "next/font/google"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function Footer() {
    return <main className="flex flex-col md:flex-row gap-2 border-t-slate-700 border-t-2 bg-gray-800 p-2 mt-8 md:items-center">
        <div className="flex-1">
            <p className={`${jbm.className} text-sm text-slate-200  font-bold`}><span className={`text-amber-300 font-bold mr-1`}>CInT</span></p>
            <p className={`${jbm.className} text-xs  text-slate-200 mt-1`}>Questions? <a className="link" href="mailto:decagontournament@gmail.com">Contact us!</a></p>
        </div>
        <span className={`${jbm.className} text-xs text-slate-300 font-light`}>Website built by Ramy Kaddouri. Source available on <a className="link" href="https://github.com/rk234/cint-site" target="_blank">GitHub</a>.</span>
    </main>
}