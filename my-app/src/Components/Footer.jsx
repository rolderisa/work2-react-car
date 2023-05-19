
import React from 'react'
import ig from '../assets/instagram.png'
import fb from '../assets/facebook.png'
import li from '../assets/linkedin.png'
import tik from '../assets/tik-tok.png'
import twit from '../assets/tik-tok.png'
import '../components/Footer.css'

function Footer() {
  return (
    <div className='footer'>

            <div class="all-footer1">
                <h2>About us</h2>
                <ul>
                    <h3>Mission</h3>
                    <li>Empowering Africans through digital life</li>
                    <h3>Vision</h3>
                    <li>Making Africa the digitalised Content</li>
                </ul>
            </div>
            <div class="all-footer2">
                <h2>Services</h2>
<br />
                <ul>
                    <li>Online courses</li>
                    <br />
                    <li>Mentorship</li>
                    <br />
                    <li>Scholarship</li>
                </ul>

            </div>
            <div class="all-footer3">
                <h2>Contact Us</h2>
                <br />
                <ul>
                    <li>+250788635806</li>
                    <br />
                    <li>angelarma2006@gmail.com</li>
                    <br />
                </ul>

                    <h4>Follow us on:</h4>
                    <img id="li" src={li}/>
    <img id="ig" src={ig}/>
    <img id="fb"src={fb}/>
    <img id="tik"src={tik}/>
           

    </div> 
    </div>
    
  )
}

export default Footer
