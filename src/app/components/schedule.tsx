import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({ subsets: ["latin"], style: ["normal"] })

export default function Schedule() {
    return <div className='flex flex-col xl:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-primary-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 03.</p>
            <h1 className={`${jbm.className} text-primary-300 text-5xl`}>Schedule</h1>
        </div>
        <div className='w-full xl:w-2/3 flex flex-col gap-1'>
            <table className='table table-auto border-2 border-collapse border-slate-800'>
                <thead className={`${jbm.className}`}>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5:40 PM</td>
                        <td>Speakers check-in</td>
                    </tr>
                    <tr>
                        <td>6:00 - 6:20 PM</td>
                        <td>Opening Ceremony</td>
                    </tr>
                    <tr>
                        <td>6:25 - 7:05 PM</td>
                        <td>Workshop 1</td>
                    </tr>
                    <tr>
                        <td>7:10 - 7:50 PM</td>
                        <td>Dinner</td>
                    </tr>
                    <tr>
                        <td>7:55 - 8:35 PM</td>
                        <td>Workshop 2</td>
                    </tr>
                    <tr>
                        <td>8:40 - 9:00 PM</td>
                        <td>Closing Ceremony</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}
