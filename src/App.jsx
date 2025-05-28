import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Vision from './components/sections/Vision';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f4f4f2]">
        <Navbar />
        <main className="max-w-7xl mx-auto">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Vision />
          <Contact />
          {/* Other sections will be added here */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
