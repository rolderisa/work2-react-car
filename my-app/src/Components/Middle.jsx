import React from 'react';
import trump from '../assets/trump.jpg';
import './Middle.css';
import mc from '../assets/mastercard.png';
import vc from '../assets/visa-credit-card.png';

function Middle() {
  let popupRef = React.useRef(null);

  const openPopup = () => {
    popupRef.current.classList.add("open-popup");
  }

  const closePopup = () => {
    popupRef.current.classList.remove("open-popup");
  }

  return (
    <div className='middle'>
      <img src={trump} alt="trump" width="100%" />
      <div className="btwn">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex!

        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex!
      <div className='pap'>

        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex!
</div>
        <button type="submit" onClick={openPopup}>Pay To Read More</button>

        <div className="popup" ref={popupRef}>
          <h2>Pay with:</h2>
          <img src={vc} height="100px" width="100px" alt="visa credit card" />
          <img src={mc} height="100px" width="100px" alt="mastercard" />

          <button type="button" onClick={closePopup}>Pay</button>
        </div>
      </div>

      <div className='pay'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>

      <div className='yup'>
         Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Om
        </div>
      <div className='pep'>

        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
      <div className='pup'>
        Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Om
        Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Om    Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Omnis assumenda enim sint aliquam ex!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam, quam labore minus illo adipisci, fugiat consequuntur ut doloribus harum dolor, inventore iusto dolore. Om
        </div>
        </div>
)}
export default Middle