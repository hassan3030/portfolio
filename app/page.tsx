
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Header from "./components/Header";
import  Main from "./components/Main";
import  Footer from "./components/Footer";
export default function Home() {
 
  return (
    <div className="">
       <ToastContainer />
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}
