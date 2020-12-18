export default function Perks() {

    return (
        <div   className=" mb-24 container flex md:flex-row flex-col items-center md:items-top justify-center mx-auto text-center md:text-left text-gray-100">
            <div style={{backgroundColor : '#0F0D0E'}} className="mx-4 px-16 py-8 rounded-lg shadow-lg my-4 max-w-md min-w-md">
                <h4  style={{color : '#D39F29'}} className="mt-0 mb-4">Discounts</h4>
                <p>Book with larger groups to get discounted prices on your stay with us.</p>
            </div>
            <div style={{backgroundColor : '#0F0D0E'}} className="mx-4 px-16 py-8 rounded-lg shadow-lg my-4 max-w-md min-w-md" >
                <h4  style={{color : '#D39F29'}} className="mt-0 mb-4">Exclusive</h4>
                <p>Need private stays, Book the entire lodge at exlcusive rates</p>
            </div>
            <div style={{backgroundColor : '#0F0D0E'}} className="mx-4 px-16 py-8 rounded-lg shadow-lg my-4 max-w-md min-w-md" >
                <h4 style={{color : '#D39F29'}}  className="mt-0 mb-4">Partner</h4>
                <p>Become a partner and book a year ahead for even bigger discounts.</p>
            </div>
        </div>
    )
}