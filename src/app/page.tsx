import Image from 'next/image';
import Header from "./components/header"
import About from "./components/About"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import Footer from '@/app/components/Footer';

function Home() {
  return (
    <>
    <Header/>
    <Menu/>
    <About/>
    <Contact/>
    </>
   
  )
};
export default Home;
