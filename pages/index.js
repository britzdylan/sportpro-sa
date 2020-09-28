import Layout from '../components/Layout'
import Hero from '../components/hero'
import WhatWeDo from '../components/what-we-do'
import { NextSeo } from 'next-seo';
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
          <section class="text-gray-700 body-font">
            <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
              <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                <p class="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>

              </div>
              <div class="flex flex-col md:w-1/2 md:pl-12">
                <h2 class="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav class="flex flex-wrap list-none -mb-1">
                  <li class="lg:w-1/3 mb-1 w-1/2">
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li class="lg:w-1/3 mb-1 w-1/2">
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li class="lg:w-1/3 mb-1 w-1/2">
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li class="lg:w-1/3 mb-1 w-1/2">
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                  <li class="lg:w-1/3 mb-1 w-1/2">
                    <a class="text-gray-600 hover:text-gray-800">Fifth Link</a>
                  </li>
                  <li class="lg:w-1/3 mb-1 w-1/2">
                    <a class="text-gray-600 hover:text-gray-800">Sixth Link</a>
                  </li>
                  <li class="lg:w-1/3 mb-1 w-1/2">
                    <a class="text-gray-600 hover:text-gray-800">Seventh Link</a>
                  </li>
                  <li class="lg:w-1/3 mb-1 w-1/2">
                    <a class="text-gray-600 hover:text-gray-800">Eighth Link</a>
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
