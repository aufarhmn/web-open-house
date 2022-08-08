import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DeanMessage from '../components/DeanMessage'
import BackToTop from '../components/BackToTop'

export default function Home() {
    return (
        <>
            {/* Form belum diexport */}
            <Navbar />
            <Hero />
            <DeanMessage />
            <BackToTop/>
        </>
    )
}
