import Layout from '../components/Layout'
import Hero from '../components/hero'
import WhatWeDo from '../components/what-we-do'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <>
      <NextSeo
        title="Global sports, lifestyle & corporate distributer | Sportpro South Africa"
        description="This example uses more of the available config options."
        canonical="https://www.sportprosa.co.za/"
      />
      <Layout>
        <div className="py-20">
          <Hero />
          <WhatWeDo />
          <section className="text-gray-700 body-font">
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
              <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
                <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Explore Sportprosa</h2>
              </div>
              <div className="flex flex-col md:w-2/3 md:pl-12">
                <h2 className="title-font font-bold text-gray-800 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="flex flex-wrap list-none -mb-1">
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <Link href="/sportpro-lodge"><a href="/sportpro-lodge" className="text-gray-600 hover:text-gray-800">Sportpro Lodging</a></Link>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <Link href="/sport-merchandise"><a href="/sport-merchandise" className="text-gray-600 hover:text-gray-800">Sport merchandising</a></Link>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <Link href="/corporate"><a href="/corporate" className="text-gray-600 hover:text-gray-800">Corporate & Promotional</a></Link>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <Link href="/art-framing"><a href="/art-framing" className="text-gray-600 hover:text-gray-800">Art framing & Memorabilia</a></Link>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a target="_blank" href="https://www.worldofrugby.co.za" className="text-gray-600 hover:text-gray-800">WorldofRugby</a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a target="_blank" href="https://www.worldofhockey.co.za" className="text-gray-600 hover:text-gray-800">WorldofHockey</a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a target="_blank" href="https://www.worldofnetball.co.za" className="text-gray-600 hover:text-gray-800">WorldofNetball</a>
                  </li>
                  <li className="lg:w-1/3 mb-1 w-1/2">
                    <a target="_blank" href="https://www.hpconditioning.co.za" className="text-gray-600 hover:text-gray-800">HPC Gym and Fitness</a>
                  </li>
                </nav>
              </div>
            </div>
          </section>
        </div>
      </ Layout>
    </>

  )
}
