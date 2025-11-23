import React from 'react';
import Hero from '../components/Hero';
import KeyHighLights from '../components/KeyHighlights';
import ServicesOverview from '../components/ServicesOverview';
import ContactUsForm from '../components/ContactUsForm';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <main className="flex flex-col w-full">
            <Hero />
            <KeyHighLights />
            <ServicesOverview />
            <Projects />
            <ContactUsForm />
        </main>
    )
}

export default Home;