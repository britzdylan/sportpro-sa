export default function LodgeDetail({ title, desc, image, reverse }) {

    return (
        <div className={`container xl:bg-white flex items-center flex-wrap flex-row justify-center lg:justify-between xl:shadow-2xl lg:py-24 px-2 lg:px-24  ${reverse ? 'flex-row-reverse mr-auto' : 'flex-row ml-auto'}`}>
            <div className="lg:w-1/3 px-6">
                <h2 className="font-extrabold text-5xl ">{title}</h2>
                <p className="max-w-lg text-xl font-light">{desc}</p>
            </div>
            <div className="lg:w-1/2 px-6">
                <img src={image} alt={title} width="auto" />
            </div>
        </div>
    )
}