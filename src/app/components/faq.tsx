import { JetBrains_Mono } from 'next/font/google'
import Placeholder from './placeholder'
import FaqQuestion from './faq-question/faqQuestion'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Faq() {
    type QuestionAnswer = {
        question: string
        answer: string
    }

    let qas = [
        {
            question: "Dr. William (Bill) Gasarch",
            answer: `Competitive programming is a mind sport in which participants try to program according to provided specifications. Essentially, it's a fun mixture of problem solving and programming!`
        },
        {
            question: "Mr. Y'aaqob Aisin",
            answer: `None, anybody can attend our tournament to learn more about programming! However, if you are interested in competing, any basic understanding of a programming language such as Java, C++, or Python would do!`
        },
        {
            question: "Ms. Belen Avelar",
            answer: `Attending this event is completely free, and all you need is a computer (Chromebook can work too)`
        },
        {
            question: "Dr. Carolyn Ernst",
            answer: "Of course you can! You have to be in Middle or High School to be eligible for prizes though."
        },
        {
            question: "Dr. Lisa Scheifele",
            answer: "YES! We will have FREE FOOD!"
        },
        {
            question: "Dr. Michelle A. Starz-Gaiano",
            answer: `There will be (amazing) prizes thanks to our sponsors, but the specific content is top secret! Come find out on the day of!`
        },
    ] as QuestionAnswer[]

    return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-primary-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 02.</p>
            <h1 className={`${jbm.className} text-primary-300 text-5xl`}>Speaker Lineup</h1>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-1'>
            {qas.map((qa, index) => <FaqQuestion key={index} question={qa.question} answer={qa.answer}/>)}
        </div>
    </div>
}