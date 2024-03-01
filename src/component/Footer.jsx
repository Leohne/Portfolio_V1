import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CV from '../assets/bm_cv.pdf'
import profil from '../assets/img/brice_profil.webp'

function Footer() {
  
  const [msgSend, setMsgSend] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ezjcxpg', 'template_oa6mgjh', form.current, {
        publicKey: 'tyKLXbinGLX3EVDeM',
      })
      .then(
        () => {
          e.target.reset();
          setMsgSend(true)
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

    return (
      <footer className="footer_contact">
        <h2 className="title_contact title">Contact.</h2>
        <div className="div_contact">
          <form ref={form} onSubmit={sendEmail}>
            <div className="div_form">
              <label htmlFor="email" className="label_h4">Email</label>
              <input type="email" id="email" name="email" placeholder="Email*" required />
            </div>
            <div className="div_form">
              <label htmlFor="name" className="label_h4">Nom</label>
              <input type="text" id="name" name="name" placeholder="Nom*" required />
            </div>
            <div className="div_form">
              <label htmlFor="objet" className="label_h4">Objet</label>
              <input type="text" id="objet" name="objet" placeholder="Objet*" required />
            </div>
            <div className="div_form">
              <label htmlFor="message" className="label_h4">Message</label>
              <textarea id="message" name="message" placeholder="Message*" required></textarea>
            </div>
            <div className="submit_form">
            <button type="submit" className="submit">Envoyer</button>
            <FontAwesomeIcon icon="fa-solid fa-check" className={`faCheck fa-3x ${msgSend ? "success" : "hidden"}`} />
            </div>
          </form>
            <div className="coordonne_contact">
              <h3 className="title_contact-h3">Coordonnée de Contact</h3>
              <div className="coordonne_div">
                <div>
                  <div>
                    <h4 className="label_h4">bricemagneville.pro@gmail.com</h4>
                    <h4 className="label_h4">Bordeaux (33)</h4>
                  </div>
                  <a className="cv_a" href={CV} download="BM_CV.pdf">
                  <button className="cv_btn">CV</button>
                  </a>
                </div>
                <img className="img_profil" src={profil} alt="Profil Brice Magneville" />
              </div>
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  