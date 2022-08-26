import photo from "./images/photo2.png"
import logo_twitter from "./images/twitter.svg"
import logo_facebook from "./images/facebook.svg"
import logo_linkedin from "./images/linkedin.svg"
import logo_github from "./images/github.svg"
import mail from "./images/mail.svg"

function sendEmail(){
    console.log("Send Email");
}

function Main(){
    return(
        <div className="Main">
            <div id="Top">
                <img src={photo} alt=""/>
            </div>
            <div id="Middle">
                <h1>Daniel Cross</h1>
                 <h4>Frontend Developer</h4>
                <a href="http://www.google.com" target="blank">website</a>
                <div id="Email" onClick={sendEmail}><img src={mail} alt=""/> Email</div>

                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in creating 3D / animated GUI designs.
                    I try to keep up with security and best practices, and am always looking for new things to learn.
                    I also enjoy developing automation systems in python.
                </p>

                <h2>Interests</h2>
                <p>Space. Tech. Programming. Gaming. Drones. Music. Poker. Travelling. Hiking. Archery.
                </p>
            </div>
            <div id="Bottom">
                <ul>
                    <li><a href="https://twitter.com/" target="blank"><img src={logo_twitter} alt="twitter"/></a></li>
                    <li><a href="https://facebook.com/" target="blank"><img src={logo_facebook} alt="facebook"/></a></li>
                    <li><a href="https://linkedin.com/" target="blank"><img src={logo_linkedin} alt="linkedin"/></a></li>
                    <li><a href="https://github.com/" target="blank"><img src={logo_github} alt="github"/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Main;
