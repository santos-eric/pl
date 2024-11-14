import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30}/>
        </Link>

        <div className="flex items-center gap-5 text-black">
          <Link href="/"><span>Mission</span></Link>
          <Link href="/"><span>Success</span></Link>
          <Link href="/"><span>FAQ</span></Link>
          <Link href="/"><span>Contact</span></Link>
        </div>

        <div className="flex items-center gap-5 text-black">
          <Link href="/"><span>Dashboard</span></Link>
          <Link href="/"><span>Public Server</span></Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar