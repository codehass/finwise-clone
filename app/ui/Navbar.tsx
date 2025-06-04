import Link from "next/link";


export default function Navbar() {
  return (
      <nav className="flex w-full justify-between py-8 px-8">
        <div className="flex items-center justify-center gap-2">
          <p className="w-7 h-7 bg-black rounded-full">.</p>
          <p className="text-2xl font-bold">Finwise</p>
        </div>
        <div className="md:flex items-center gap-4 hidden ">
          <Link href="#features" className="text-lg hover:text-gray-500">Features</Link>
          <Link href="#pricing" className="text-lg hover:text-gray-500">Pricing</Link>
          <Link href="#testimonials" className="text-lg hover:text-gray-500">Testimonials</Link>
          <button className="cursor-pointer bg-yellow-300 hover:bg-yellow-400 px-8 py-3 rounded-3xl">
            Download
          </button>
        </div>
      </nav>
    
  )
}
