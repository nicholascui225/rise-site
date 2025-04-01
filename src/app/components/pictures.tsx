import { JetBrains_Mono } from 'next/font/google'
const jbm = JetBrains_Mono({ subsets: ["latin"], style: ["normal"] })
const images2022 = [
  "20220311_202337.jpg",
  "image0.jpg",
  "IMG_0367.JPG",
  "IMG_0368.JPG",
  "IMG_0369.JPG",
  "IMG_0370.JPG",
  "IMG_0371.JPG",
  "IMG_0372.JPG",
  "IMG_0373.JPG",
  "IMG_0374.JPG",
  "IMG_4447.JPG"
];

const images2023 = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg"
];

export default function Pictures() {
  return (
    <div className='flex flex-col md:flex-row bg-gray-900 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
      <div className='grow border-b-primary-300 border-b-2'>
        <p className={`${jbm.className} text-sm`}> -&gt; 05.</p>
        <h1 className={`${jbm.className} text-primary-300 text-5xl`}>Pictures</h1>
      </div>
      <div className='w-full md:w-2/3 flex flex-col gap-2'>
        {/* 2023 Section */}
        <div className="flex flex-col border-2 border-gray-600">
          <div className="p-2 bg-gray-600 text-slate-200">
            <h1 className={`${jbm.className} text-lg`}>2023</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center p-4 bg-gray-600/30 gap-8">
            {images2023.map((image, index) => (
              <img key={index} src={`/pics/2023/${image}`} className='h-72' alt={`Image ${index}`} />
            ))}
          </div>
        </div>
  
        {/* 2022 Section */}
        <div className="flex flex-col border-2 border-gray-600">
          <div className="p-2 bg-gray-600 text-slate-200">
            <h1 className={`${jbm.className} text-lg`}>2022</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center p-4 bg-gray-600/30 gap-8">
            {images2022.map((image, index) => (
              <img key={index} src={`/pics/2022/${image}`} className='h-72' alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  
}
