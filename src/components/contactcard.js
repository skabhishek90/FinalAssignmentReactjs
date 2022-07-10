import './contactcard.css';
import { useState } from 'react';
import axios from 'axios';

export default function Contactcard() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const send = () => {
        const body= {
            name:name,
            email:email,
            text:message
        }
        axios.post("http://projecthosting.herokuapp.com/mail",body)
        .then(() => {console.log("sent")})
        .catch(() => {console.log("error")})
    }
    return (
        <div>
        <div className='contactcard'>
            <div className='contactcardheading'><p>Let's Talk!</p></div>
            <div className='contactinput'>
                <input type='text' placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
            </div>
            <div className='contactinput'>
                <input type='text' placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} />
            </div>
            <div className='contactinput'>
                <textarea placeholder='message' value={message} onChange={(e) => setmessage(e.target.value)}/>
            </div>
            <div className='Send' onClick={() => send()}>Send</div>
            </div>
        </div>
    );
}