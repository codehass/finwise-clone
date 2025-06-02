import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8 px-4">
      <div className="flex items-center justify-center gap-2">
        <p className="w-7 h-7 bg-black rounded-full">.</p>
        <p className="text-2xl font-bold">Finwise</p>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className="text-lg ">Features</Link>
        <Link href="/" className="text-lg">Pricing</Link>
        <Link href="/" className="text-lg">Testimonials</Link>
        <button className="bg-yellow-300 px-8 py-3 rounded-3xl">
          Download
        </button>
        </div>
    </nav>
  )
}
