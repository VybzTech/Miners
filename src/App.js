import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Lithium from './Components/Home/Lithium';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Home/Navbar';
import Products from './Components/Products/Products';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import ErrorHandler from './Components/ErrorHandler';

function App() {
    const [activeNav, set] = useState('Home');
    const navs = ['Home', 'About', 'Products', 'Services', 'Contact'];

    useEffect(() => {
        navs.map((nav) => {
            var observer = new IntersectionObserver(onIntersection, {
                root: null,
                threshold: 0.5,
            });

            function onIntersection(entries) {
                if (entries[0].isIntersecting === true) {
                    set(nav);
                }
            }

            observer.observe(window?.document?.querySelector(`section#${nav}`));
        });
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop === 0) {
                set('Home');
                // } else {
                // 	set("contact")
                // setTop(false)
            }
        });
        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);

    return (
        <div className='App'>
            <Navbar navs={navs} activeNav={activeNav} set={set} />
            <ErrorHandler>
                <Home />
            </ErrorHandler>
            <ErrorHandler>
                <About />
            </ErrorHandler>
            <ErrorHandler>
                <Lithium />
            </ErrorHandler>
            <ErrorHandler>
                <Products />
            </ErrorHandler>
            <ErrorHandler>
                <Services />
            </ErrorHandler>
            <ErrorHandler>
                <Contact />
            </ErrorHandler>
        </div>
    );
}

export default App;
