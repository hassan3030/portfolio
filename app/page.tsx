
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Header from "./components/Header";
import  Main from "./components/Main";
import  Footer from "./components/Footer";
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Skills } from './components/Skills';


export default function Home() {
 
  return (
    <div className="">
       <ToastContainer />
    <Header/>
    <Main/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>

    {/* --------------------------------------- */}
 
    {/* ----------------------------------------- */}
    </div>
  );
}
