import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../Component/Navbar';
import HeroSection from '../../Component/HeroSection';
import AboutSection from '../../Component/AboutSection';
import SkillsSection from '../../Component/SkillsSection';
import InterestsSection from '../../Component/InterestsSection';
import ProjectsSection from '../../Component/ProjectsSection';
import ContactSection from '../../Component/ContactSection';
import Footer from '../../Component/Footer';
import '../../../../css/app.css';

const Index = () => {
    return (
        <main className="min-h-screen bg-[#0a1120] text-white">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <InterestsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </main>
    );
};

export default Index;
