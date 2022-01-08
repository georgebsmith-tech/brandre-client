import Link from 'next/link'
import Nav from '../components/Nav'
import Welcome from '../components/Welcome'
import Whatwedo from '../components/Whatwedo'
import Projects from '../components/Projects'
import Skillsets from '../components/Skillsets'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import {FaArrowCircleDown, FaArrowCircleRight} from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <Nav/>
      <Welcome/>
      <h4 className='f36 ct lh48 bold500 mt50 mb50 text-blue'>You need everything to stand out right!</h4>
      <div className='grid grid3 gap20 mx20p'>
        <Whatwedo/>
      </div>
      <div className='mt50'>
        <h2 className='ct ptserif bold f54 lh80 mb30 text-red'>Our Services</h2>
        <div className='relative'>
          <div className='flex space-between absolute left0 right0 mt10 mx10'>
            <h5 className='text-white f36'>Application and Website Development</h5>
            {/* icons */}
            <p className='f36'>Icons</p>
          </div>
          <div>
            <img src="images/HomePage/Brandr hero 03 1.png" alt="ss" className='max-w-full'/>  
          </div>
        </div>
        <div className='mt50 px5'>
          <h5 className='bold500 f36 mb10 text-blue'>Light, Fast & Powerful Websites</h5>
          <div className='grid grid2'>
            <p  className='f16 text-blue-500 lh26'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            {/* <Link href={'/'}> <a className='mt10 bold f18 ct py20 px24 bg-blue-200'>Get in touch</a></Link> */}
            <div className='self-end'>
            <Link href="/account-manager">
                <a className='bdr8 text-white mt10 bold f18 ct py20 px24 bg-blue-200'>
                  Get in touch
                </a>
            </Link>
            </div>
            
          </div>
        </div>
        <div className='px5 pr10 mt30'>
          <h3 className='bold500 f36 mb10 text-gray-200'>See featured Case Studies</h3>
          <div className='grid gapx10 grid4 '>
            <Projects/>
          </div>
        </div>
        <div className='mt50'>
          <Skillsets/>
        </div>
      </div>
      <div className='px5 mt50'>
        <h4 className='f36 bold500 text-blue mb30 afterdiv'>ABOUT US</h4>
        <div className='grid grid2-60-40 space-between'>
          <div className=''>
            <h2 className='serif f84 bold text-red lh80 mb20'>We are founded
                on the principle
                of creativity and excellence
            </h2>
            <p className='f24 lh32 inter bold500 text-blue-200 -ls2em'>With our expertise, we fuel your social media and create apps that promote engaging experience for your business.</p>
          </div>
          <div className='self-end'>
            <img src="./images/HomePage/Group.png" alt=""/>
          </div>
        </div>
        <div className='mt70 grid grid2'>
          <div className=''>
            <h5 className='bold500 f36 text-blue mb15'>Mission Statement</h5>
            <div className='pr30per'>
              <p className='f16 lh26 text-blue-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                  mus.</p>
              <p className='f16 lh26 text-blue-400'>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div> 
          <div className=''>
            <h5 className='bold500 f36 text-blue mb15'>Vision and VALUEs</h5>
            <div className='pr30per'>
              <p className='f16 lh26 text-blue-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                  mus.</p>
              <p className='f16 lh26 text-blue-400'>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>

          </div>                   
        </div>
      </div>
      <div className='mt100 bg-light-green p10 py30'>
        <div className='ct'>
          <h4 className='f36 bold500 text-blue mb10'>What our Clients say</h4>
          <p className='f16 lh26 text-blue-500 px25per'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>    
        </div>
        <div className='grid grid3 gapy40 gapx20 mt50 px10'>
          <Testimonials/>
        </div>
        <p className='bold400 f16 ct text-blue-500 mt50'>Connect with us on socials to read more Awards and Accolades we have baged!</p>            
      </div>
      <div className='bg-yellow-200 py50'>
          <h4 className='text-blue ct f47 bold500'>Clients we have worked with</h4>
          <div className='py25 mt20 flex space-between flexalign-start px10'>
            <img src="images/HomePage/icons/hooli.png" alt=""/>
            <img src="images/HomePage/icons/lyft.png" alt=""/>
            <img src="images/HomePage/icons/leaf.png" alt=""/>
            <img src="images/HomePage/icons/stripe.png" alt=""/>
            <img src="images/HomePage/icons/aws.png" alt=""/>
            <img src="images/HomePage/icons/teddybear.png" alt=""/>
            {/* icons full here */}
          </div>

      </div>
      <div className='bg-blue-200 text-white py50'>
        <div className='mb30'>
          <h3 className='poppins ct bold f66 mb10 text-white'>Meet Our Team</h3>
          <p className='opensans ct px10 lh36 f22 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='grid grid4 px5 gapy20'>
          <Team/>
        </div>
      </div>
      <div className='bg-gray py50 grid grid2 px3'>
        <div className='pr15per'>
          <h4 className='bold monte f40 lh57 text-white ls2 mb15'>Got a project? Get in touch with us now! </h4>
          <ContactForm/>
          <p className='mt20 text-white f16 bold monte ls1'>Looking for an internship opportunity? <Link href={'/'}><a className='text-blue-200 underline'>Click Here</a></Link> to register</p>
        </div>
        <img src='images/HomePage/Group (1).png' alt="" className='mt50'/>
      </div>
      <Footer/>
    </div>
  )
}
