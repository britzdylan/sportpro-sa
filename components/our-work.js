


export default function OurWork({ item, index }) {

    return (

        <img loading="lazy" title={item.title} className="md:w-64 lg:w-1/4 m-1 rounded transition duration-500 ease-in-out transform hover:scale-90 hover:z-50 z-0 shadow-lg object-cover" src={item.src} key={index} alt={item.title} />

    )
}