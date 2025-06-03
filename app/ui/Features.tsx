import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section id="features" className="flex flex-col items-center justify-center gap-4 h-screen w-full md:max-w-2xl bg-blue-300">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-6xl text-center">
        Smart, Secure, Simple Financial Management
        </h1>
        <p>
        From effortless budgeting to real-time investment insights, Finwise puts you in control of your money like never before
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 bg-black text-white px-6 rounded-3xl h-14">
            <Image src="/appel.svg" alt="Download from App Store" width={30} height={30} className="text-white" />
            
            <div>
              <p className="text-xs">Download on the</p>
              <Link href="/" className="text-xl font-bold">App Store</Link>
            </div>
          </button>

          <button className="flex items-center gap-3 bg-black text-white px-6 rounded-3xl h-14">
            <Image src="/playstore.svg" alt="Download from App Store" width={30} height={30} className="text-white" />
            <div>
              <p className="text-xs">GIT IT ON</p>
              <Link href="/" className="text-xl font-bold">Google Play</Link>
            </div>
          </button>
        </div>
      </section>
  )
}
