import Nav from './nav'
import Footer from './footer'

export default function Layout({ children }) {

    return (
        <>
            <Nav />
            <main className="w-full lg:w-3/4 mx-auto font-OpenSans">{children}</main>
            <Footer />
        </>
    )
}