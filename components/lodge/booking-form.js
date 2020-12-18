import InlineForm from "./inline-booking-form";
import { Icon, InlineIcon } from '@iconify/react';
import xIcon from '@iconify/icons-bi/x';

export default function BookingForm({ showForm,setFormShow }) {

    return (
        <section style={{backgroundColor : '#0F0D0E', top : '0', left : '0', zIndex : '999'}} id="" className={`${showForm ? 'block' : 'hidden'} w-full h-screen flex flex-col items-center justify-center bg-gray-800 text-white fixed px-4 py-12`}>
            <Icon icon={xIcon} style={{fontSize: '48px', position :'absolute', right : '5', top : '5'}} className="cursor-pointer transform hover:rotate-90 transition duration-500 ease-in-out" onClick={setFormShow}/>
            <p className="text-2xl lg:text-5xl font-bold mb-8">Request your quote</p>
            <p className="hidden max-w-md text-center md:my-4 sm:block">Please note all quotes are valid for 60 days. To secure your booking 50% deposit is required.</p>
            <InlineForm />
        </section>
    )
}