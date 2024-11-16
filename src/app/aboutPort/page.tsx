'use client';

import Image from 'next/image'
import data from '@/components/dataAboutPort'
// import Link from 'next/link'

export default function aboutPort() {
  return (
    <div className='mt-16'>
    
    {/* <div className='text-center font-bold text-2xl text-y'>
  <Link href="/"><button className='text-xl hover:text-2xl md:text-4xl hover:md:text-5xl text-yellow-600 hover:text-gray-400 font-serif'>Home</button></Link>
  </div> */}
    
    <section dir="rtl" className="py-4 px-4 text-center">
        <h2 className="text-2xl font-bold">عن بورسعيد</h2>
        <p className="mt-4 text-gray-600">بورسعيد مدينة ساحلية جميلة ذات تاريخ وثقافة غنية، تتميز بموقعها الجغرافي وتاريخها الرائع.</p>
      </section>
    {data && data.map((d) => (
    <main key={d.id} className="grid grid-cols-1 md:grid-cols-3 mb-3 items-center justify-between gap-2">

    <div className='my-5 ml-auto mr-auto'>
    <Image
      className="rounded shadow-2xl shadow-black w-64 h-56"
      src={d.image}
      alt="Logo"
      width='260'
      height='130'
      priority
    />
    </div>
    
    <div dir='rtl' className='col-span-2 p-3 md:mr-9 shadow-2xl shadow-black space-y-3 md:h-64 '>
    <h1 className='text-center font-bold text-4xl md:mt-8 text-seaBlue'>{d.title}</h1>
    <p className='text-center text-xl font-bold '>{d.discription}</p>
    <p className='text-center text-xl font-bold '>{d.history}</p>
    </div>
  
  
    
    </main>
   ))}


  </div>
  
  )
}
