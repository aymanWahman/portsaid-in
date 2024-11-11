import Image from "next/image";

export default function LocalServices() {
  return (
    <div className="mt-20">
      
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center">الخدمات المحلية في بورسعيد</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* بطاقة الخدمة هنا */}
          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="rounded-xl relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/imgs/portsaid1.jpg"
          alt="Next.js Logo"
          width={350}
          height={222}
          priority
        />
          
      </div>

        </div>
      </section>
    </div>
  );
}
