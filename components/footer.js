import Link from 'next/link'


export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className="text-gray-700 body-font bg-gray-200">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Link href="/" ><img title="sportpro south africa" loading="lazy" src="/logo.svg" width="50px" alt="sportpro south africa" /></Link>
                        <span className="ml-3 text-xl">Sportpro South Africa</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Global sports, lifestyle & corporate
distributer</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Brands</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a target="_blank" href="https://www.worldofrugby.co.za" className="text-gray-600 hover:text-gray-800">WorldofRugby</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.worldofhockey.co.za" className="text-gray-600 hover:text-gray-800">WorldofHockey</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.worldofnetball.co.za" className="text-gray-600 hover:text-gray-800">WorldofNetball</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.hpconditioning.co.za" className="text-gray-600 hover:text-gray-800">HPC Gym and Fitness Centre</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Services</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/corporate"><a href="/corporate" className="text-gray-600 hover:text-gray-800">Corporate & Promotional</a></Link>
                            </li>
                            <li>
                                <Link href="/art-framing"><a href="/art-framing" className="text-gray-600 hover:text-gray-800">Art Framing & Memorabilia</a></Link>
                            </li>
                            <li>
                                <Link href="/sport-merhcandise"><a href="/sport-merchandise" className="text-gray-600 hover:text-gray-800">Sport Merchandise</a></Link>
                            </li>
                            <li>
                                <Link href="/sportpro-lodge"><a href="/sportpro-lodge" className="text-gray-600 hover:text-gray-800">Lodge</a></Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Info</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/privacy" ><a href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></Link>
                            </li>
                            <li>
                                <Link href="/sitemap" ><a href="/sitemap" className="text-gray-600 hover:text-gray-800">Sitemap</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© {year} All Rights Reserved —
        <a href="https://www.sportprosa.co.za" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Sportpro South Africa</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}