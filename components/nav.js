import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Nav() {

  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  const viewMenu = () => {
    setOpen(!open);
    console.log(open);
  }


  return (
    <header className="text-gray-900 font-OpenSans bg-gray-100">
      <div className="container mx-auto md:flex flex-wrap p-5 flex-col md:flex-row justify-between items-center hidden">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto cursor-pointer">
          <Link href='/sport-merchandise'><a style={{ fontWeight: router.pathname == '/sport-merchandise' ? '700' : '500' }} className="mr-5 hover:text-green-700">Sport Merchandise</a></Link>
          <Link href='/corporate'><a style={{ fontWeight: router.pathname == '/corporate' ? '700' : '500' }} className="mr-5 hover:text-green-700">Corporate</a></Link>
          <Link href="/brands"><a style={{ fontWeight: router.pathname == '/brands' ? '700' : '500' }} className="mr-5 hover:text-green-700">Brands</a></Link>
        </nav>
        <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center cursor-pointer lg:justify-center mb-4 md:mb-0">
          <Link href="/" ><img title="sportpro south africa" loading="lazy" src="/logo.svg" width="100px" alt="sportpro south africa" /></Link>
        </div>
        <nav className="flex lg:w-2/5 flex-wrap items-center justify-end text-base cursor-pointer">
          <Link href="/sportpro-lodge"><a style={{ fontWeight: router.pathname == '/sportpro-lodge' ? '700' : '500' }} className="mr-5 hover:text-green-700">Lodging</a></Link>
          <Link href="/art-framing"><a style={{ fontWeight: router.pathname == '/art-framing' ? '700' : '500' }} className="hover:text-green-700">Art Framing & Memorabilia</a></Link>
        </nav>
      </div>


      <div className="md:hidden relative w-full">
        <div className="flex flex-row justify-between items-center">
          <div className="flex order-first w-1/2 lg:order-none lg:w-1/5 p-5 title-font font-medium items-center text-gray-900 lg:items-center cursor-pointer lg:justify-center mb-4 md:mb-0">
            <Link href="/" ><img title="sportpro south africa" loading="lazy" src="/logo.svg" width="100px" alt="sportpro south africa" /></Link>
          </div>
          <div className="w-20 ml-auto">
            {/* <svg onClick={viewMenu} viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg> */}
            <button className={`border-none appearance-none menu ${open === false ? '' : 'opened'}`} aria-expanded={open === false ? 'false' : 'true'} onClick={viewMenu} aria-label="Main Menu">
              <svg width="70" height="70" viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
          </div>
        </div>
        <nav className={`flex flex-col w-full h-screen ${open === false ? `-translate-x-full` : `translate-x-50`} transition-all transform duration-500 ease-in-out bg-gray-900 text-white justify-start pt-10 text-2xl items-center text-base cursor-pointer absolute`}>
          <Link href='/sport-merchandise'><a style={{ color: router.pathname == '/sport-merchandise' ? '#2F855A' : 'white' }} className="mb-10 hover:text-green-700">Sport Merchandise</a></Link>
          <Link href='/corporate'><a style={{ color: router.pathname == '/corporate' ? '#2F855A' : 'white' }} className="mb-10 hover:text-green-700">Corporate</a></Link>
          <Link href="/brands"><a style={{ color: router.pathname == '/brands' ? '#2F855A' : 'white' }} className="mb-10 hover:text-green-700">Brands</a></Link>
          <Link href="/sportpro-lodge"><a style={{ color: router.pathname == '/sportpro-lodge' ? '#2F855A' : 'white' }} className="mb-10 hover:text-green-700">Lodging</a></Link>
          <Link href="/art-framing"><a style={{ color: router.pathname == '/art-framing' ? '#2F855A' : 'white' }} className="hover:text-green-700">Art Framing & Memorabilia</a></Link>
        </nav>
      </div>
    </header>

  )
}
