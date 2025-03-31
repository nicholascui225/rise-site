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
            answer: `Dr. William Gasarch is a professor of computer science at the University of Maryland. 
            He has been there for 40 years and works on the math-end of computer science. His workship will focus on the 
            Muffin Problem, a problem in fair division. 
            Aside from the problem itself, he will discuss
            how he came across it, where to find problems, 
            how he solved it or how to solve problems in general, and any life lessons from the project.`
        },
        {
            question: "Mr. Y'aaqob Aisin",
            answer: `Speaker profiles coming soon!`
        },
        {
            question: "Ms. Belen Avelar",
            answer: `Ms. Belen Avelar is a second-year PhD student at the University of Maryland, Baltimore, 
            where she studies bone metabolism using mouse models. Her research focuses on understanding the
            mechanisms that regulate bone health, contributing to a broader understanding of human physiology and disease.
            At the RISE conference, Avelar will share her journey to graduate school, discussing the academic path, 
            research experiences, and application process that led her to a PhD program. She will also provide an overview 
            of biomedical research, highlighting the use of cell culture systems and animal models to study human health. 
            Additionally, she will offer practical advice for navigating college and exploring careers in science.`
        },
        {
            question: "Dr. Carolyn Ernst",
            answer: `Dr. Carolyn Ernst is a planetary scientist at the Johns Hopkins Applied Research Laboratory whose research focuses on the surface evolution of planets
            , satellites, and small bodies. She utilizes laboratory experiments, spacecraft data, and numerical models to investigate 
            planetary processes.
            At the RISE conference, Dr. Ernst will offer insights into the field of planetary science, 
            discussing the many career paths available within the discipline. She will share her own journey in the field 
            and explore the diverse opportunities for those interested in studying planets, moons, and small bodies.`
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
        {
            question: "Dr. Marcin Ptaszek",
            answer: `Speaker profiles coming soon!`
        },
        {
            question: "Dr. Andrei Vedernikov",
            answer: `Speaker profiles coming soon!`
        },
        {
            question: "Dr. Minjoung Kyoung",
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