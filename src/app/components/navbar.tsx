import { JetBrains_Mono } from "next/font/google"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function NavBar() {
    return <main className="bg-gray-900 flex flex-col items-center">
        <div className="w-full constructionStripes text-left border-b border-b-amber-400">
            <div className="bg-gradient-to-r from-gray-900 via-gray-900 to-transparent w-full h-full p-2">
                <span className={`font-bold`}>Note: This website is still under development, more information will be available closer to the event!</span>  
            </div>
        </div>
        
        <div className="flex flex-row p-2 w-full items-center">
            <span className={`${jbm.className} text-amber-300 text-2xl font-bold`}> CInT </span>
            <div className="flex-1"></div>
            <div className="flex flex-row gap-2 items-center">
                <a className={`${jbm.className} btn-primary text-sm`} href="https://docs.google.com/forms/d/e/1FAIpQLSeeC-h3OTe2GSN3e6pkJ3feinun5dQy8oQoBhUwVXs5WFh2Rg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Register</a>
            </div>
        </div>
       
    </main>
}