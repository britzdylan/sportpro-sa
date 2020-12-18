import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Nav({ setFormShow }) {

  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  const viewMenu = () => {
    setOpen(!open);
    console.log(open);
  }


  return (
    <header  style={{backgroundColor : '#fff', zIndex : '998'}} className=" fixed top-0 w-full">
      <div className="container mx-auto md:flex flex-wrap py-5 flex-col md:flex-row justify-between items-center hidden px-2">
        <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center cursor-pointer lg:justify-center mb-4 md:mb-0">
          <Link href="/" ><img title="sportpro south africa" loading="lazy" src="/lodge/lodge.svg" width="50px" alt="sportpro south africa" /></Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center text-base cursor-pointer uppercase">
         <a href="#offers" className="mr-6 text-light">Our Offers</a>
         <a href="#0" className="mr-6 text-light">Work</a>
         <a href="#1" className="mr-6 text-light">Play</a>
         <a href="#2" className="mr-6 text-light">Stay</a>
         <a href="#3" className="mr-6 text-light">Explore</a>
         <a href="#gallery" className="mr-6 text-light">Gallery</a>
        </nav>
        <button onClick={setFormShow} style={{backgroundColor : '#D39F29'}} className=" block hover:bg-yellow-900 border-0 py-2 px-6 focus:outline-none rounded text-base cursor-pointer" >Book Now</button>
      </div>


      <div className="md:hidden relative w-full">
        <div className="flex flex-row justify-between items-center">
          <div className="flex order-first w-1/2 lg:order-none lg:w-1/5 py-2 px-2 title-font font-medium items-center text-gray-900 lg:items-center cursor-pointer lg:justify-center mb-4 md:mb-0">
          <Link href="/" ><img title="sportpro south africa" loading="lazy" src="/lodge/lodge.svg" width="50px" alt="sportpro south africa" /></Link>
          </div>
          <div className="w-12 ml-auto">
            {/* <svg onClick={viewMenu} viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg> */}
            <button className={`border-none appearance-none menu ${open === false ? '' : 'opened'}`} aria-expanded={open === false ? 'false' : 'true'} onClick={viewMenu} aria-label="Main Menu">
              <svg width="45" height="45" viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
          </div>
        </div>
        <nav style={{backgroundColor : '#0F0D0E'}} className={`flex flex-col w-full h-screen ${open === false ? `-translate-x-full` : `translate-x-50`} transition-all transform duration-500 ease-in-out text-white justify-start pt-10 text-xl items-center text-base cursor-pointer absolute uppercase px-2`}>
         <a onClick={viewMenu}  href="#offers" className="mb-6 text-light">Our Offers</a>
         <a  onClick={viewMenu} href="#0" className="mb-6 text-light">Work</a>
         <a onClick={viewMenu}  href="#1" className="mb-6 text-light">Play</a>
         <a onClick={viewMenu}  href="#2" className="mb-6 text-light">Stay</a>
         <a onClick={viewMenu}  href="#3" className="mb-6 text-light">Explore</a>
         <a onClick={viewMenu}  href="#gallery" className="mb-6 text-light">Gallery</a>
        <button onClick={setFormShow} style={{backgroundColor : '#D39F29'}} className="mt-6 block hover:bg-yellow-900 border-0 py-2 px-6 focus:outline-none rounded text-base cursor-pointer w-full text-black" >Book Now</button>

        </nav>
        
      </div>
    </header>

  )
}
