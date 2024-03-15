import { JetBrains_Mono } from 'next/font/google'
const jbm = JetBrains_Mono({ subsets: ["latin"], style: ["normal"] })

export default function Sponsors() {
  return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
    <div className='grow border-b-amber-300 border-b-2'>
      <p className={`${jbm.className} text-sm`}> -&gt; 04.</p>
      <h1 className={`${jbm.className} text-amber-300 text-5xl`}>Sponsors</h1>
    </div>
    <div className='w-full md:w-2/3 flex flex-col gap-2'>
      <div className="flex flex-col border-2 border-gray-600">
        <div className="p-2 bg-gray-600 text-slate-200">
          <h1 className={`${jbm.className} text-lg`}>Silver</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center p-2 bg-gray-600/30">
          <a href="https://www.interviewcake.com/" target='_blank'>
            <img src="/sponsors/interview-cake.svg" className='h-24' alt="Interview Cake Logo" />
          </a>
        </div>
      </div>

      <div className="flex flex-col border-2 border-amber-700">
        <div className="p-2 bg-amber-700 text-slate-200">
          <h1 className={`${jbm.className} text-lg`}>Bronze</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center p-2 bg-amber-700/30">
          <a href="https://artofproblemsolving.com/" target='_blank' className='bg-slate-300 p-1 rounded'>
            <img src="/sponsors/aops.png" className='h-24' alt="AOPS Logo" />
          </a>
        </div>
      </div>
    </div>
  </div>
}
