import Layout from '../components/Layout'
import Link from "next/link";
import { NextSeo } from 'next-seo';


const brands = [
    {
        title: 'WorldofRugby',
        description: 'WorldofRugby is our first and most successfull brand, WorldofRugby is a retail and eCommerce rugby store specializing in Rugby Boots and player equipment. WorldofRugby is also the number one destination for any rugby fan to get their hands the widest range of national and international supporters wear.',
        link: 'https://www.worldofrugby.co.za',
        img: '/worldofrugby.jpg',
        color: 'red'
    },
    {
        title: 'WorldofHockey',
        description: 'Worldofhockey is a retail and eCommerce hockey store specializing in hockey gear and player equipment.',
        link: 'https://www.worldofhockey.co.za',
        img: '/worldofhockey.jpg',
        color: 'green'
    },
    {
        title: 'WorldofNetball',
        description: 'WorldofNetball is a retail and eCommerce netball store specializing in netball gear and player equipment.',
        link: 'https://www.worldofnetball.co.za',
        img: '/worldofnetball.jpg',
        color: 'pink'
    },
    {
        title: 'SA Sport Scores',
        description: 'Sports results, news and rankings from across the country',
        link: 'https://www.sasportscores.co.za',
        img: '/sass.jpg',
        color: 'blue'
    },
    {
        title: 'HPC Gym and Fitness centre',
        description: 'High Performance Conditioning Centre for athletes, crossfit and combat sports ',
        link: 'https://www.hpconditioning.co.za',
        img: '/hpc.jpg',
        color: 'gray'
    }
]


export default function Brands() {

    return (
        <>
            <NextSeo
                title='Brands | Sportpro South Africa'
                description=''
                canonical="https://www.sportprosa.co.za"
                openGraph={{
                    title: 'Brands | Sportpro South Africa',
                    description: '',
                    images: [{
                        url: "",
                        width: 600,
                        height: 600,
                        alt: "sportpro brands",
                    }]
                }}
            />
            <Layout>
                <h1 className="text-3xl font-bold mt-20 text-center">Our Brands</h1>
                <hr />
                {brands.map(brand =>

                    <section className="text-gray-700 body-font">

                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">{brand.title}
                                </h2>
                                <p className="mb-8 leading-relaxed text-lg">{brand.description}</p>
                                <div className="flex justify-center">
                                    <a href={brand.link} target="_blank"><button className={`inline-flex text-white bg-${brand.color}-600 border-0 py-2 px-6 focus:outline-none hover:bg-${brand.color}-800 rounded text-lg tracking-wider`}>Visit</button></a>
                                </div>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 shadow-2xl">
                                <img loading="lazy" title={brand.title} className="object-cover object-center rounded" alt={brand.title} src={brand.img} />
                            </div>
                        </div>
                    </section>

                )}



            </Layout>
        </>
    )

}