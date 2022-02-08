import Link from 'next/link'
//    


import Nav from '../components/Nav'
import Welcome from '../components/Welcome'
import Whatwedo from '../components/Whatwedo'
// import Projects from '../components/Projects'
import Skillsets from '../components/Skillsets'
import Testimonials from '../components/Testimonials'
// import Team from '../components/Team'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
// "dev": "(if exist .next rd /s /q .next 2>null) && next dev",
import {FaArrowCircleDown, FaArrowDown, FaArrowLeft} from 'react-icons/fa'


export default function Home() {
  
  return (
    <div className='x-hidden'>
    {/* <div> */}
      <Nav/>
      <Welcome/>
      <h4>You need everything to stand out right!</h4>
      <div className='whatwedo'>
        <Whatwedo/>
      </div>
      <div className='mt100 service'>
        <h2 className='serviceh2 ptserif'>Our Services</h2>
        <div className='appservice'>
          <div className='appdiv'>
            <h5>Application and Website Development</h5>
            {/* icons */}
            <a href="/">
              <FaArrowLeft size='30' fill='#0E0A5C'/>
            </a>
          </div>
          <div className='relative'>  
            <img src="images/HomePage/icons/playvid.png" alt="" className='playbutton'/>
            <img src="images/HomePage/Brandr hero 03 1 (1).png" alt="ss" className='w-screen max-w-full'/>  
          </div>
        </div>
        <div className='websitediv'>
          <h5 className='text-blue'>Light, Fast &amp; Powerful Websites</h5>
          <div>
            <p  className='text-blue-500 webdesc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            {/* <Link href={'/'}> <a className='mt10 bold f18 ct py20 px24 bg-blue-200'>Get in touch</a></Link> */}
            <div className='webdesclink'>
            <Link href="/account-manager">
                <a className='text-white bg-blue-200'>
                  See Projects
                </a>
            </Link>
            </div>
            
          </div>
        </div>
        {/* <div className='projectdiv'>
          <h3 className='text-gray-200'>See featured Case Studies</h3>
          <div className='projectgrid'>
            <Projects/>
          </div>
        </div> */}
        <div className='skillsetdiv'>
          <Skillsets/>
        </div>
      </div>
      <div className='aboutus'>
        <h4 className='text-blue afterdiv'>ABOUT US</h4>
        <div className='headline'>
          <div>
              <img src="./images/HomePage/programmer.png" alt="" />
              <p>App/Website Development</p>
          </div>
          <div>
              <img src="./images/HomePage/packaging.png" alt="" />
              <p>Branding/Graphics</p>
          </div>
          <div>

              <img src="./images/HomePage/doctor 1.png" alt="" />
              <p>Business Consultation</p>
          </div>
          <div>
              <img src="./images/HomePage/social-media.png" alt="" />
              <p>Social wedia/ Advertising</p>
          </div>
          {/* <div className='headlinedesc'>
            <h2 className='serif text-red'>We are founded
                on the principle
                of creativity and excellence
            </h2>
            <p className='inter text-blue-200'>With our expertise, we fuel your social media and create apps that promote engaging experience for your business.</p>
          </div>
          <div className='aboutimg'>
            <img src="./images/HomePage/Group.png" alt=""/>
          </div> */}
        </div>
        <p className='inter expertise'>With our expertise, we fuel your social media and create apps that promote engaging experience for your business.</p>
        <div className='misval'>
          <div className='mission'>
            <h5 className='text-blue'>Mission Statement</h5>
            <div className='content'>
              <p className='text-blue-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                  mus.</p>
              <p className='text-blue-400'>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div> 
          <div className=''>
            <h5 className='text-blue'>Vision and VALUEs</h5>
            <div className='content'>
              <p className='text-blue-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                  mus.</p>
              <p className='text-blue-400'>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>                   
        </div>
      </div>
      <div className='bg-gray'>
        <div className='teamdiv'>
          <h4 className='text-white'>Our Team</h4>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='contactdiv'>
          <h4 >Contact Us</h4>
          <div className='contactgrid'>
            <div>
              <h4 className='monte text-white'>Got a project? Get in touch with us now! </h4>
              <ContactForm/>
              <p className='internship'>Looking for an internship opportunity? <Link href={'/'}><a className='text-blue-200 underline'>Click Here</a></Link> to register</p>
            </div>
            <img src='images/HomePage/Group (1).png' alt="ddd" />
          </div>
        </div>  
      </div>

      {/* <div className='testiparent bg-light-green'>
        <div className='headline ct'>
          <h4 className='text-blue'>What our Clients say</h4>
          <p className='text-blue-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>    
        </div>
        <div className='testi'>
          <Testimonials/>
        </div>
        <p className='text-blue-500 connect'>Connect with us on socials to read more Awards and Accolades we have baged!</p>            
      </div>
      <div className='clientsdiv'>
          <h4 className='text-blue'>Clients we have worked with</h4>
          <div>
            <img src="images/HomePage/icons/hooli.png" alt="" />
            <img src="images/HomePage/icons/lyft.png" alt="" />
            <img src="images/HomePage/icons/leaf.png" alt="" />
            <img src="images/HomePage/icons/stripe.png" alt="" />
            <img src="images/HomePage/icons/aws.png" alt=""/>
            <img src="images/HomePage/icons/teddybear.png" alt=""/>
          </div>

      </div> */}
      {/* <div className={`${onTabletOrMobile?'gradient-2':'bg-blue-200'} text-white py50`}>
        <div className={`${onTabletOrMobile?null:null} mb30`}>
          <h3 className={`${onTabletOrMobile?'f33':'f66'} poppins ct bold mb10 text-white`}>Meet Our Team</h3>
          <p className={`${onTabletOrMobile?'f18 lh26 px3':'f22 lh36 px10'} opensans ct text-white`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={` ${onTabletOrMobile?'grid2 px5 gapx20':'grid4 px5'} grid gapy20`}>
          <Team/>
        </div>
      </div> */}    
      <Footer/>
    </div>
  )
}
