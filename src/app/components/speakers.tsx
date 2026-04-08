import { JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import FaqQuestion from './faq-question/faqQuestion'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Speakers() {
    type Speaker = {
        name: string
        bio: string
        image: string
        imageAlt: string
    }

    const speakers: Speaker[] = [
        {
            name: "Dr. Carolyn Ernst",
            bio: `Dr. Carolyn Ernst is a planetary scientist who studies the surfaces of planets, moons, and asteroids using spacecraft data, lab experiments, and 3D modeling techniques. In her workshop, she'll share what it's like to work in planetary science, her journey through space missions like DART, Europa Clipper, and Hayabusa2, and the many career paths available in the field—perfect for students interested in astronomy, space exploration, and how we study distant worlds.`,
            image: "/pics/speakers/ernst.jpg",
            imageAlt: "Headshot of Dr. Carolyn Ernst"
        },
        {
            name: "Dr. Claire Hur",
            bio: `Dr. Claire Hur is an Assistant Professor in Mechanical Engineering at Johns Hopkins University, where she studies how tiny fluids move and interact with cells. Her research focuses on building microfluidic devices—small systems that control fluids at the microscale—to better understand cell behavior and develop new tools for medicine. In her workshop, she'll explore how cancer is a collection of many different cell types, why single-cell analysis matters, and how liquid biopsies and microfluidics are advancing cancer research and personalized medicine—perfect for students interested in the intersection of engineering and biology.`,
            image: "/pics/speakers/hur.jpg",
            imageAlt: "Headshot of Dr. Claire Hur"
        },
        {
            name: "Dr. Michelle A. Starz-Gaiano",
            bio: `Dr. Michelle A. Starz-Gaiano is a professor and Chair of the Department of Biological Sciences at UMBC, where she researches the molecular mechanisms of animal development—especially the control of cell motility. Over 18 years, her lab has used fruit flies (Drosophila melanogaster) to identify new, conserved regulators of cell migration, using interdisciplinary approaches that bridge biology and mathematics. In her workshop, she'll explore the genetic control of how cells navigate through their environment.`,
            image: "/pics/speakers/starz-gaiano.jpg",
            imageAlt: "Headshot of Dr. Michelle A. Starz-Gaiano"
        },
        {
            name: "Dr. Albert Lau",
            bio: `Dr. Albert Lau is a professor of biophysics at Johns Hopkins University, where he specializes in computational studies of biological macromolecules, with a particular focus on those found in the brain. He also directs the PhD and Master's programs in biophysics at JHU. In his workshop, he'll introduce the field of biophysics and discuss the kinds of research that biophysicists do—perfect for students curious about how physics and computation come together to understand life at the molecular level.`,
            image: "/pics/speakers/lau.jpg",
            imageAlt: "Headshot of Dr. Albert Lau"
        },
        {
            name: "Dr. Neiyer Correal",
            bio: `Dr. Neiyer Correal is an Electrical Engineer at the Johns Hopkins Applied Physics Laboratory. In his workshop, he'll share his career journey and how math and science have shaped his life's trajectory—exploring how mathematical patterns unlock solutions across countless domains, and how science teaches us to stay curious and learn through experience. Expect real-world examples of math and science working together.`,
            image: "/pics/speakers/correal.jpg",
            imageAlt: "Headshot of Dr. Neiyer Correal"
        },
        {
            name: "Dr. Leonid Koralov",
            bio: `Dr. Leonid Koralov is a professor in the Department of Mathematics at the University of Maryland, College Park, where his research spans probability and stochastic processes—including diffusion processes, branching processes, and metastability. He also serves as Director of Graduate Studies in the Mathematics Department. In his workshop, he'll tackle the classic Gambler's Ruin problem: using only high-school mathematics, he'll explore the chances a gambler reaches their goal before going broke, how long the game lasts on average, and the probability it stretches beyond a given number of rounds.`,
            image: "/pics/speakers/koralov.jpg",
            imageAlt: "Headshot of Dr. Leonid Koralov"
        },
        {
            name: "Dr. Candice M. Duncan",
            bio: `Dr. Candice M. Duncan is an Assistant Professor in the College of Agriculture and Natural Resources at the University of Maryland, College Park. Her interdisciplinary research draws on environmental science and chemistry to detect, characterize, and remove contaminants from the environment. Her work has also contributed to understanding the lifestyles of early enslaved African and African American people through chemical soil and water analysis. In her workshop, she'll discuss her road to assistant professorship, her environmental and geoscience research programs, and how she integrates teaching and scholarship.`,
            image: "/pics/speakers/duncan.jpg",
            imageAlt: "Headshot of Dr. Candice M. Duncan"
        },
        {
            name: "Dr. Jim Barrow",
            bio: `Dr. Jim Barrow is a Professor of Pharmacology at Johns Hopkins University and the Chief Drug Development Officer at the Lieber Institute for Brain Development. With 14 years of drug discovery experience at Merck Research Laboratories, over 70 peer-reviewed publications, and 36 patents, he leads research on treatments for psychiatric disorders. In his workshop, he'll give an overview of drug discovery and development—highlighting how chemistry and biology come together—using a calcium channel target as a case study from initial idea to human clinical trial.`,
            image: "/pics/speakers/barrow.jpg",
            imageAlt: "Headshot of Dr. Jim Barrow"
        },
        {
            name: "Dr. William Gasarch",
            bio: `Dr. William Gasarch is a professor in the Computer Science Department at the University of Maryland, with an affiliate appointment in Mathematics. In his workshop, he'll explore the fascinating intersection of math and computer science.`,
            image: "/pics/speakers/gasarch.jpg",
            imageAlt: "Headshot of Dr. William Gasarch"
        },
        {
            name: "Dr. Stephen Grill",
            bio: `Dr. Stephen Grill is a Movement Disorders neurologist specializing in Parkinson's disease, tremor, and dystonia. He treats patients using medications, deep brain stimulation, and botulinum toxin injections. In his workshop, he'll discuss how deep brain stimulation helps people with Parkinson's disease and how it has enabled researchers to better understand the underlying pathophysiology of the disease.`,
            image: "/pics/speakers/grill.jpg",
            imageAlt: "Headshot of Dr. Stephen Grill"
        },
    ]

    return (
        <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
            <div className='grow border-b-primary-300 border-b-2'>
                <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 02.</p>
                <h1 className={`${jbm.className} text-primary-300 text-5xl`}>Speaker Lineup</h1>
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-6'>
                {speakers.length === 0 ? (
                    <p className={`${jbm.className} text-slate-400`}>Speaker lineup coming soon. Stay tuned!</p>
                ) : (
                    speakers.map((speaker, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 bg-gray-800/50 p-4 rounded-lg">
                            <div className="w-full md:w-1/4 flex justify-center">
                                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary-300">
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.imageAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-3/4">
                                <FaqQuestion
                                    question={speaker.name}
                                    answer={speaker.bio}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

// import { JetBrains_Mono } from 'next/font/google'
// import Placeholder from './placeholder'
// import FaqQuestion from './faq-question/faqQuestion'

// const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

// export default function Faq() {
//     type QuestionAnswer = {
//         question: string
//         answer: string
//     }

//     let qas = [
//         {
//             question: "Dr. William (Bill) Gasarch",
//             answer: `Dr. William Gasarch is a professor of computer science at the University of Maryland. 
//             He has been there for 40 years and works on the math-end of computer science. His workship will focus on the 
//             Muffin Problem, a problem in fair division. 
//             Aside from the problem itself, he will discuss
//             how he came across it, where to find problems, 
//             how he solved it or how to solve problems in general, and any life lessons from the project.`
//         },
//         {
//             question: "Mr. Y'aaqob Aisin",
//             answer: `Speaker profiles coming soon!`
//         },
//         {
//             question: "Ms. Belen Avelar",
//             answer: `Ms. Belen Avelar is a second-year PhD student at the University of Maryland, Baltimore, 
//             where she studies bone metabolism using mouse models. Her research focuses on understanding the
//             mechanisms that regulate bone health, contributing to a broader understanding of human physiology and disease.
//             At the RISE conference, Avelar will share her journey to graduate school, discussing the academic path, 
//             research experiences, and application process that led her to a PhD program. She will also provide an overview 
//             of biomedical research, highlighting the use of cell culture systems and animal models to study human health. 
//             Additionally, she will offer practical advice for navigating college and exploring careers in science.`
//         },
//         {
//             question: "Dr. Carolyn Ernst",
//             answer: `Dr. Carolyn Ernst is a planetary scientist at the Johns Hopkins Applied Research Laboratory whose research focuses on the surface evolution of planets
//             , satellites, and small bodies. She utilizes laboratory experiments, spacecraft data, and numerical models to investigate 
//             planetary processes.
//             At the RISE conference, Dr. Ernst will offer insights into the field of planetary science, 
//             discussing the many career paths available within the discipline. She will share her own journey in the field 
//             and explore the diverse opportunities for those interested in studying planets, moons, and small bodies.`
//         },
//         {
//             question: "Dr. Lisa Scheifele",
//             answer: "Speaker profiles coming soon!"
//         },
//         {
//             question: "Dr. Michelle A. Starz-Gaiano",
//             answer: `Speaker profiles coming soon!`
//         },
//         {
//             question: "Dr. Bipen Basnyat",
//             answer: `Speaker profiles coming soon!`
//         },
//         {
//             question: "Dr. Marcin Ptaszek",
//             answer: `Speaker profiles coming soon!`
//         },
//         {
//             question: "Dr. Andrei Vedernikov",
//             answer: `Speaker profiles coming soon!`
//         },
//         {
//             question: "Dr. Minjoung Kyoung",
//             answer: `Speaker profiles coming soon!`
//         },
//     ] as QuestionAnswer[]

//     return <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
//         <div className='grow border-b-primary-300 border-b-2'>
//             <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 02.</p>
//             <h1 className={`${jbm.className} text-primary-300 text-5xl`}>Speaker Lineup</h1>
//         </div>
//         <div className='w-full md:w-2/3 flex flex-col gap-1'>
//             {qas.map((qa, index) => <FaqQuestion key={index} question={qa.question} answer={qa.answer}/>)}
//         </div>
//     </div>
// }