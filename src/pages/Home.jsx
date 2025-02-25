import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import KeyHighLights from '../components/KeyHighlights';
import ServicesOverview from '../components/ServicesOverview';
import Footer from '../components/Footer';
import ContactUsForm from '../components/ContactUsForm';

const Home = () => {

    return (
        <div className=''>
            {/* <Navbar /> */}
            <Hero />
            <KeyHighLights />
            <ServicesOverview />
            <ContactUsForm />
            {/* <Footer /> */}
        </div>
    )
}

export default Home;