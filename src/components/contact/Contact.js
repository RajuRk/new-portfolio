import React, { useRef, useState, useContext} from 'react'
import Address from '../../img/address.png'
import Email from '../../img/email.png'
import Phone from '../../img/phone.png'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import './contact.css'
import emailjs from "emailjs-com";
import { ThemeContext } from '../../Context'

function Contact() {
  
  const formRef = useRef(); 
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_50ihfsn",
        "template_71azzrg",
        formRef.current,
        "G-bvzskLEKIAIadXp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="c">
       <div className="c-bg"></div>
       <div className="c-wrapper">
           <div className="c-left">
             <h1 className="c-title">Let's discuss your project</h1>
             <div className="c-info">
                <div className="c-info-item">
                    <img src={Github} alt="" className="c-icon"/> https://github.com/RajuRk
                </div>
                <div className="c-info-item">
                    <img src={LinkedIn} alt="" className="c-icon"/> https://www.linkedin.com/in/rajkumar-ramasamy-7409ba226
                </div>
                <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon"/> +91 978 835 1283
                </div>
                <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon"/> rajurk044@gmail.com
                </div>
                <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon"/> 24A Murugan nagar 2nd Street, Rathinapuri, Coimbatore, 641027
                </div>
             </div>
           </div>
           <div className="c-right">
            <p className="c-desc">
                <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                <textarea style={{backgroundColor: darkMode && "#333"}} row="5" placeholder="Message" name="user_message"/>
                <button>Submit</button>
                <div>{done && "Thank you..."}</div>                
            </form>
           </div>
       </div>
    </div>
  )
}

export default Contact