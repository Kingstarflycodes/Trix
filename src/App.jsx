import { useState } from 'react'
import './App.css'
import trixLogo from './assets/img/Trix.png'
import whatsappChat from './assets/img/whatsapp_img.png'
import iPhone from './assets/img/iPhone.png'
import charOne from './assets/img/game_img.png'
import charTwo from './assets/img/game_img2.png'
import charThree from './assets/img/game_img3.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <nav className="nav-bar">
        <img className='trix-logo' src={trixLogo} />
        <div className="nav-menu">
          <ul>
            <li><p>Home</p></li>
            <li><p>Services</p></li>
            <li><p>About Us</p></li>
            <li><button className='get-started btn'>Get Started</button></li>
          </ul>
        </div>
      </nav>

      <main className="main">
        <div className="head-session">
          <div className="head-details">
            <h1 className="head-title">Your Portal to Gaming Excellence<br />and Endless Adventures</h1>
            <p className="head-text-one"><i>"</i>Immerse Yourself in a World Where Gaming<br />Dreams Come Alive with Trix".</p>
            <p className="head-text-two">Where Every Click Unleashes a New Level of Thrill !</p>
            <div className="head-analysis">
              <div className="users">
                <p className="head-num">3k+</p>
                <p className="head-num-desc">Active Users</p> 
              </div>
              <div className='downloaded'>
                <p className="head-num">10k+</p>
                <p className="head-num-desc">Downloaded</p>
              </div>
            </div>
            <div className="head-btns">
              <button className="get-started btn">Get Started</button>
              <button className='btn'>How it works</button>
            </div>
            <img className="char-one" src={charOne} />
          </div>
          <div className="phone">
            <img className='whatsapp-chat' src={whatsappChat} />
            <img className='iphone' src={iPhone} />
          </div>
        </div>

        <div className="second-session">
          <p className="stay-connected sedgwick-ave">Stay Connected With Trix</p>
          <p className="sc-desc sedgwick-ave">&#128227; Personalized Promotions:<br />Exclusive promotions, gaming events, and surprises delivered directly to<br />your email and whatsapp. Because the best gaming experince includes a<br />touch of magic.</p>
          <div className="sec-session-join">
            <p className='ssj-desc'>Ready to embark on the ultimate gaming adventure? Join<br />Trix today, where every click opens a door to gamin<br />bliss. Let the games begin! &#128640;&#127918;</p>
            <button className="get-started btn">Get Started</button>
            <img className='char-two' src={charTwo} />
          </div>
        </div>

        <div className="discover-session">
          <p className="discover-trix sedgwick-ave">Discover the Trix Advantage</p>
          <p className="discover-desc">Are you ready to revolutionize your gaming experience? Dive into the unparalleled advantages that<br />Trix brings to the table, making every one move, every transaction, and every gaming moment an<br />adventure like never before.</p>
          <ul className="first-dis-ul">
            <li>
              <p>&#128640; Instant Transactions</p>
              <p>Trix takes speed to the next level. Enjoy<br />instant transactions, whether it's topping up<br />your airtime, grabbing a gift card, or<br />engaging in the bustling buy-and-sell<br />marketplace. The gaming world waits for no<br />one - neither does Trix.</p>
            </li>
            <li>
              <p>&#x1F4A1; Real Rewards, Real Fun</p>
              <p>Elevate your gaming journey with our rewarding<br />points system. Every transaction earns you points,<br />transforming your loyalty into tangible benefits.<br />Convert these points into real cash and unlock a<br />new dimension of fun and excitement.</p>
            </li>
            <li>
              <p>&#x1F504; Flexible Payment Options</p>
              <p>No more obstacles on your path to<br />gaming bliss. Trix offers flexible<br />payment options, allowing you to fund<br />your wallet through trusted traders or<br />opt for secure card payments. Your<br />gaming adventure, your rules.</p>
            </li>
          </ul>
          <ul className="second-dis-ul">
            <img className="char-three" src={charThree} />
            <li>
              <p>&#x1F6E1; Secure and Transparent Transactions</p>
              <p>Trust lies at the core of the Trix advantage.<br />Our platform ensures secure transactions<br />through reliable payment gateways, and<br />we maintain transparency at every step.<br />Game with confidence, knowing your<br />transactions are in safe hands</p>
            </li>
            <li>
              <p>&#x1F310; Diverse Marketplace, One Destination</p>
              <p>Explore a marketplace curated for gamers by<br />gamers. From instant airtime and data top-ups<br />to buying and selling gaming essentials, Trix is<br />your one-stop destination for all things<br />gaming. Your desires, your choices - all in one<br />place.</p>
            </li>
            <li>
              <p>&#x1F31F; Promotions Tailored for You</p>
              <p>Stay ahead of the gaming curve with<br />personalized promotions and updates. Trix<br />keeps you informed about exclusive offers,<br />gaming events, and surprises that add an<br />extra layer of excitement to your gaming<br />routine.</p>
            </li>
          </ul>
        </div>

        <div className="how">
          <h1>How it works</h1>
          <div className="how-first-child">
            <div className="list-dot"></div>
            <div className="desc-cont">
              <p>Initiate Transactions with Ease</p>
              <p>Start your gaming journey by exploring the marketplace.</p>
              <p>Trix allows you to make transactions even with a zero wallet balance.</p>
            </div>
          </div>
          <div className="how-second-child">
            
          </div>
        </div>
      </main>
    </body>
  )
}

export default App
