import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="flex justify-around w-full">
      <div className="flex items-center justify-between py-8 px-4 mx-6">
        <div className="flex items-center justify-center gap-2">
          <p className="w-7 h-7 bg-black rounded-full">.</p>
          <p className="text-2xl font-bold">Finwise</p>
        </div>
        <div className="md:flex items-center gap-4 hidden ">
          <Link href="#features" className="text-lg ">Features</Link>
          <Link href="#pricing" className="text-lg">Pricing</Link>
          <Link href="#testimonials" className="text-lg">Testimonials</Link>
          <button className="bg-yellow-300 px-8 py-3 rounded-3xl">
            Download
          </button>
          </div>
        </div>
    </nav>
  )
}
