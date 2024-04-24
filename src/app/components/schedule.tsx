import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({ subsets: ["latin"], style: ["normal"] })

export default function Schedule() {
    return <div className='flex flex-col xl:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-amber-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 03.</p>
            <h1 className={`${jbm.className} text-amber-300 text-5xl`}>Schedule</h1>
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
                        <td>1:00 - 1:45 PM</td>
                        <td>Registration</td>
                    </tr>
                    <tr>
                        <td>1:45 - 2:00 PM</td>
                        <td>Opening Ceremony</td>
                    </tr>
                    <tr>
                        <td>2:00 PM</td>
                        <td>Tournament Begins</td>
                    </tr>
                    <tr>
                        <td>6:00 PM</td>
                        <td>Dinner</td>
                    </tr>
                    <tr>
                        <td>7:30 PM</td>
                        <td>Closing Ceremony</td>
                    </tr>
                    <tr>
                        <td>8:00 PM</td>
                        <td>End of Event</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}
