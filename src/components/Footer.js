// import Link from 'next/link';
// import Ry from './say'
const Footer = () => {
  return (
    <footer className='justify-center bg-transparent rounded-t-xl border border-gray-600 shadow-2xl w-full p-5'>
  <div className='flex gap-2 text-center items-center justify-center '>
    {/* <Link href="/" >
    <Ry/>
    </Link> */}
    {/* <h3 className="text-gray-500 font-bold text-2xl text-center  my-3">وقل ربي زدني علمًا</h3>   */}

  </div>
        {/* <div className='flex gap-x-2 md:gap-x-6 text-sm md:text-xl p-5 justify-center  items-center'>
      
  <div className=" flex gap-2 md:gap-6  justify-center items-center text-xs md:text-xl p-1">
  <p className="text-blue-400 font-bold "> Tel: +201000333377</p>  
  <p className="text-blue-400 font-bold "> Email: aymanwahman80@gmail.com</p>  
    </div>
    
    </div> */}
  

    <div><p className='text-sm md:text-lg text-center text-gray-500 font-serif'>Designed and developed by <span className='text-seaBlue hover:text-gray-500 hover:text-2xl'>A.Aly</span></p></div>


    </footer>
    
  );
}

export default Footer;
