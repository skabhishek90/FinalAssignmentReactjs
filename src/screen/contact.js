import './contact.css';
import Contactcard from '../components/contactcard';

import github from '../assets/github.svg';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import linkedin from '../assets/linkedin.svg';

export default function Contact(){
    return(
        <div className="contact" id = "contact">
            <h1>CONTACT</h1>
            <Contactcard />
            <p className="or">OR</p>
            <p className="contacttext">Feel free to reach me out on</p> 
            <div className="links">
                <a href="https://github.com/skabhishek90" rel="noreferrer" target="_blank" >
                <img src={github} alt=""/>
                </a>
                <a href="mailto:kabhishekkumar90@gmail.com" rel="noreferrer" target="_blank" >
                <img src={gmail} alt=""/>
                </a>
                <a href="https://www.instagram.com/skabhishek90" rel="noreferrer" target="_blank" >
                <img src={instagram} alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-sk/" rel="noreferrer" target="_blank" >
                <img src={linkedin} alt=""/>
                </a>
                <a href="tel:7734843134" >
                <img src={whatsapp} alt=""/>
                </a>
            </div>
        </div>
    )
}