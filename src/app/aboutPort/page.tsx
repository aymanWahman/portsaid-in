import Image from 'next/image'
import data from '../../components/DataAboutPort'
// import Link from 'next/link'

export default function aboutPort() {
  return (
    <div className=''>
    
    {/* <div className='text-center font-bold text-2xl text-y'>
  <Link href="/"><button className='text-xl hover:text-2xl md:text-4xl hover:md:text-5xl text-yellow-600 hover:text-gray-400 font-serif'>Home</button></Link>
  </div> */}
    
    <section dir="rtl" className="p-3 text-center">
        <h2 className="text-2xl font-bold">عن بورسعيد</h2>
        <p className="mt-4 text-gray-600">بورسعيد مدينة ساحلية جميلة ذات تاريخ وثقافة غنية، تتميز بموقعها الجغرافي وتاريخها الرائع.</p>
      </section>
    {data && data.map((d) => (
    <main key={d.id} className="grid grid-cols-1 px-3 md:grid-cols-3 mb-3 md:gap-2">

    <div className='my-5 mt-7'>
    <Image
      className="rounded shadow-2xl shadow-black w-[350px] h-[250px] mx-auto"
      src={d.image}
      alt={d.title}
      width='460'
      height='360'
      priority={false}
      loading='lazy'
    />
    </div>
    
    <div dir='rtl' className='col-span-2 p-3  shadow-2xl shadow-black space-y-2 '>
    <h1 className='text-center font-bold text-2xl md:text-4xl md:mt-8 text-seaBlue'>{d.title}</h1>
    <p className='text-center text-lg md:text-xl font-bold '>{d.description}</p>
    <p className='text-center text-lg md:text-xl font-bold '>{d.history}</p>
    </div>
  
      
      
    
    </main>
   ))}

  
  </div>
  
  )
}
