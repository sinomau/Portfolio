import Hero from './components/Hero';
import Navbar from './components/Nabvar';
import About from './components/About';
import Projects from './components/Projects';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <Hero />
        <About />
        <Projects />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
