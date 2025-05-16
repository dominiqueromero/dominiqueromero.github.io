import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { LoadingScreen } from './components/LoadingScreen.jsx';
import { Navbar } from './components/Navbar.jsx';
import { MobileMenu } from './components/MobileMenu.jsx';
import { Home } from './components/sections/Home.jsx';
import { About } from './components/sections/About.jsx';
import { Projects } from "./components/sections/Projects.jsx";
import { Contact } from "./components/sections/Contact.jsx"
import { RevealOnScroll } from './components/sections/RevealOnScroll.jsx';
import "./index.css"

function App() {
  // const [count, setCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0}"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} serMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>

  );
}

export default App
