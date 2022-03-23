import React from "react";
import Header from "./components/Header/header";
import Nav from "./components/Nav/Nav";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

const App = () => {
    return (
        <>
        <div className="container">
             <Header />
             <Nav />
             <About />
             <Experience />
             <Projects />
            <Testimonials />
            <Contact />
        </div>
        <Footer />
        </>
    );
}

export default App;