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
            question: "What is Competitive Programming?",
            answer: `Competitive programming is a mind sport in which participants try to program according to provided specifications. Essentially, it's a fun mixture of problem solving and programming!`
        },
        {
            question: "What programming languages do I need to know?",
            answer: `None, anybody can attend our tournament to learn more about programming! However, if you are interested in competing, any basic understanding of a programming language such as Java, C++, or Python would do!`
        },
        {
            question: "What do I need for this tournament?",
            answer: `Attending this event is completely free, and all you need is a computer (Chromebook can work too)`
        },
        {
            question: "Can I attend?",
            answer: "Of course you can! You have to be in Middle or High School to be eligible for prizes though."
        },
        {
            question: "Is food provided?",
            answer: "YES! We will have FREE FOOD!"
        },
        {
            question: "What kind of prizes are there?",
            answer: `There will be (amazing) prizes thanks to our sponsors, but the specific content is top secret! Come find out on the day of!`
        },
        {
            question: "How difficult will the problems be?",
            answer: "Difficulty is subjective, but the problems will range from very easy problems that beginners can solve to extremely difficult USACO Gold level problems!"
        },
        {
            question: "Can I participate by myself?",
            answer: `For sure! If you are looking for a team, you can try to contact other programmers in our Discord server or try to find some teammates on the day of. Please note that teams can only have up to four members!`
        },
        {
            question: "Can I choose my teammates?",
            answer: `Yes! We will provide 30 minutes after the Guest Speaker Workshop for students to form teams. You can talk to friends beforehand to form teams, or meet new people at CInT to team with. We will provide instructions on how to register your team into our own website on the day of!`
        },
        {
            question: "How will submissions be graded?",
            answer: `We will be using our own website this year to grade submissions. Further instructions will be given during the Opening Ceremony!`
        }
    ] as QuestionAnswer[]

    return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-amber-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 02.</p>
            <h1 className={`${jbm.className} text-amber-300 text-5xl`}>FAQ</h1>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-1'>
            {qas.map(qa => <FaqQuestion question={qa.question} answer={qa.answer}/>)}
        </div>
    </div>
}