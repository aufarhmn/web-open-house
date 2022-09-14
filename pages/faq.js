import NavbarSimplified from "../components/NavbarSimplified";
import DaftarFAQ from '../components/DaftarFAQ';
import { HeroFAQ } from "../components/HeroFAQ";
import Footer from "../components/Footer";
import Head from "next/head";

export default function FAQ() {
    return(
        <>
            <Head>
                <title>FAQ</title>
            </Head>
            <NavbarSimplified />
            <HeroFAQ/>
            <DaftarFAQ />
            <Footer />
        </>
    )
}