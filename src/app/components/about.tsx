import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function About() {
    return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-amber-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 01.</p>
            <h1 className={`${jbm.className} text-amber-300 text-5xl`}>Overview </h1>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-1'>
            <h1 className={`${jbm.className} text-amber-300 font-bold text-xl`}>What is CInT?</h1>
            <p>
                CInT, or Competitive Informatics Tournament, gives Middle and High School Students the opportunity to learn to code, apply problem solving skills, and make new friends with algorithm-based questions.
            </p>
            <p>
                Not only will winners be eligible for prizes from our sponsors, but will also be given opportunities to attend workshops held by guest speakers.
            </p>
            <h1 className={`${jbm.className} text-amber-300 font-bold text-xl mt-4`}>Date & Location</h1>
            <p>
                This year, CInT will be held at Centennial High School 
                <a className="link mx-1 text-amber-300" href="https://maps.app.goo.gl/vRjrU1QYevxyWkRS8" target="_blank" rel="noopener noreferrer">(4300 Centennial Lane, Ellicott City, MD, 21042)</a>
                on May 4, 2024 from 1:00PM-8:00PM.
            </p>
            <h1 className={`${jbm.className} text-amber-300 font-bold text-xl mt-4`}>Contest Rules</h1>
            <ul className='list-outside list-disc ml-4'>
                <li className='list-item'>Groups of up to four are allowed, but each student must register individually.</li>
                <li className='list-item'>Students of all experience levels are welcome.</li>
                <li className='list-item'>Groups my be formed in advance, but time will be provided to create teams at the event.</li>
                <li className='list-item'>Prizes will be awarded to individual members on winning teams.</li>
            </ul>
        </div>
    </div>
}