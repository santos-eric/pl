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
          <Link href="www.google.com"><span>Mission</span></Link>
          <Link href="www.google.com"><span>Success</span></Link>
          <Link href="www.google.com"><span>FAQ</span></Link>
          <Link href="www.google.com"><span>Contact</span></Link>
        </div>

        <div className="flex items-center gap-5 text-black">
          <Link href="www.google.com"><span>Dashboard</span></Link>
          <Link href="www.google.com"><span>Public Server</span></Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar