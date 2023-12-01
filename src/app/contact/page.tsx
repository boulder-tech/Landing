import ContactSection from "../../components/sections/Contact-section";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  return <main>
    <div className="md:mt-[35vh] mt-[25vh]">
      <ContactSection />
    </div>
    <ToastContainer 
      position="bottom-right" 
      toastStyle={{ backgroundColor: "#245BFF0a", color: 'white' }}
    />
  </main>;
}
