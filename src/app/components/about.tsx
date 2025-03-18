import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function About() {
    return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-primary-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 01.</p>
            <h1 className={`${jbm.className} text-primary-300 text-5xl`}>Overview </h1>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-1'>
            <h1 className={`${jbm.className} text-primary-300 font-bold text-xl`}>What is RISE?</h1>
            <p>
                The RISE conference, or Research in Science and Engineering conference, gives middle schoolers, high schoolers, and lifelong learners in our community an opportunity to explore their passions, gain guidance, and learn the value of science education in the fields of science, math, and engineering.
            </p>
            <p>
                Attendees will attend workshops presented by professors and professionals with STEM backgrounds and careers, gaining valuable insight and advice. Additionally, many STEM clubs from Centennial's community will present booths during dinner.
            </p>
            <h1 className={`${jbm.className} text-primary-300 font-bold text-xl mt-4`}>Date & Location</h1>
            <p>
                This year, RISE will be held at Centennial High School 
                <a className="link mx-1 text-primary-300" href="https://maps.app.goo.gl/vRjrU1QYevxyWkRS8" target="_blank" rel="noopener noreferrer">(4300 Centennial Lane, Ellicott City, MD, 21042)</a>
                on April 2nd, 2025 from 5:30PM-9:00PM. 
            </p>
            <h1 className={`${jbm.className} text-primary-300 font-bold text-xl mt-4`}>Admission & Food</h1>
            <p>
                Admission and dinner (pizza) are both FREE for all attendees!
            </p>
        </div>
    </div>
}