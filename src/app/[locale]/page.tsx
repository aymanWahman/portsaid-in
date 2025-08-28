// import About from '@/components/about';
// import Contact from '@/components/contact';
import FeaturedPlaces from './_components/FeaturedPlaces';
import Hero from './_components/Hero';

export default async function Home() {
  return (
    <main className='pt-14'>
      <Hero />
      <FeaturedPlaces />
      
      {/* <About /> */}
      
    </main>
  );
}
