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
            answer: `Speaker profiles coming soon!`
        },
        {
            question: "Mr. Y'aaqob Aisin",
            answer: `Speaker profiles coming soon!`
        },
        {
            question: "Ms. Belen Avelar",
            answer: `Speaker profiles coming soon!`
        },
        {
            question: "Dr. Carolyn Ernst",
            answer: "Speaker profiles coming soon!"
        },
        {
            question: "Dr. Lisa Scheifele",
            answer: "Speaker profiles coming soon!"
        },
        {
            question: "Dr. Michelle A. Starz-Gaiano",
            answer: `Speaker profiles coming soon!`
        },
        {
            question: "Dr. Bipen Basnyat",
            answer: `Speaker profiles coming soon!`
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