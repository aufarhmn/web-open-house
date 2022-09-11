import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DeanMessage from '../components/DeanMessage'
import SubEvents from '../components/SubEvents'
import BackToTop from '../components/BackToTop'
import Form from '../components/Form'

export default function Home() {
    return (
        <>
            {/* Form belum diexport */}
            <Navbar />
            <Hero />
            <DeanMessage />
            <SubEvents />
            <BackToTop/>
            <Form/>
        </>
    )
}
