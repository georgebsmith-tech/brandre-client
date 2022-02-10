import Link from 'next/link'


export default function Footer() {
    
    return (
        <footer>
            <div className='mainfooter bg-blue-300'>
                <div className='mb30'>
                    <div className='socials'>
                        <h5 className='monte text-white'>Follow @ Fleckr.ng </h5>
                        <div className='socialdiv'>
                            <div>
                                <img src="images/HomePage/icons/facebook.png" alt=""/>
                            </div>
                            <div>
                                <img src="images/HomePage/icons/twitter.png" alt=""/>
                            </div>
                            <div>
                                <img src="images/HomePage/icons/insta.png" alt=""/>
                            </div>
                            <div>
                                <img src="images/HomePage/icons/youtube.png" alt=""/>
                            </div>                           
                             {/* fb,twitter, insta, youtube */}
                        </div>
                    </div>
                    <hr className='bgblue'/>
                </div>
                <ul className='footer-list'>
                    <li className='companyinfo'>
                        <p>Company Info</p>
                        <ul>
                            <li>About Us</li>
                            <li>Clients</li>
                            <li>Internship</li>
                            <li>Teams</li>
                        </ul>
                    </li>
                    <li className='features'>
                        <p>Features</p>
                        <ul>
                            <li>Web/ app dev</li>
                            <li>Branding</li>
                            <li>Printing</li>
                            <li>Social media</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Web/ app dev</li>
                            <li>Branding</li>
                            <li>Printing</li>
                            <li>Social media</li>
                        </ul>
                    </li>
                    <li>
                        <p>Resources</p>
                        <ul>
                            <li>Download Profile</li>
                            <li>YouTube Lessons</li>
                            <li>FAQ</li>
                        </ul>
                    </li>
                    <div className='newsletter'>
                        <p className='txt-first'>Get In Touch</p>
                        <div className='letterdiv'>
                            <input type="text" placeholder='Your Email'/>
                            <Link href='/'>
                                <button>Subscribe</button>
                            </Link>
                            
                        </div>
                        <p className='txt-last'>Lets you get access to our premium offers!</p>
                    </div>
                </ul>    
            </div>
            
            <div className='copydiv'>
                <p className='text-white'>Made With Love By Fleckr All Right Reserved 2022</p>
            </div>
        </footer>
        
    )
}
// flex f14 space-between