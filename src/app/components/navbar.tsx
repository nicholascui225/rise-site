import { JetBrains_Mono } from "next/font/google"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function NavBar() {
    return <main className="bg-gray-900 flex flex-col items-center">
        <div className="flex flex-row p-2 w-full items-center">
            <span className={`${jbm.className} text-green-300 text-2xl font-bold`}> RISE </span>
            <div className="flex-1"></div>
            <div className="flex flex-row gap-2 items-center text-sm">
                {/* <button disabled={true} className={`${jbm.className} btn-primary`}>Register</button> */}

                <a className={`${jbm.className} btn-primary text-sm`} href="https://forms.gle/ctJPAKktFs2bPQYz5" target="_blank" rel="noopener noreferrer">Register</a>
            </div>
        </div>

    </main>
}
