import { JetBrains_Mono } from "next/font/google"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function NavBar() {
    return <main className="bg-gray-900 flex flex-col items-center">
        <div className="flex flex-row p-2 w-full items-center">
            {/* <span className={`${jbm.className} text-green-300 text-2xl font-bold`}> RISE </span> */}
            <p className={`${jbm.className} text-slate-200 font-bold`}>
            <span className={`text-primary-300 text-2xl font-bold mr-2`}>RISE</span>
            <span className="text-2xl">Conference</span>
            </p>
            <div className="flex-1"></div>
            <div className="flex flex-row gap-2 items-center text-sm">
                {/* <button disabled={true} className={`${jbm.className} btn-primary`}>Register</button> */}

                <a className={`${jbm.className} btn-primary text-sm`} href="http://docs.google.com/forms/d/e/1FAIpQLSdN2Y8Ia2HHhnSjfnNR1OUD_-uVdCE4Wp9KCCzq1VA2x8MJAQ/viewform" target="_blank" rel="noopener noreferrer">Register</a>
            </div>
        </div>

    </main>
}
