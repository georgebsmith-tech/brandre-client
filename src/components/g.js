import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';


import Nav from '../components/Nav'
import Welcome from '../components/Welcome'
import Whatwedo from '../components/Whatwedo'
import Projects from '../components/Projects'
import Skillsets from '../components/Skillsets'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
// "dev": "(if exist .next rd /s /q .next 2>null) && next dev",
import {FaArrowCircleDown} from 'react-icons/fa'

export default function Home() {
  const onTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
  return (
    <div className='x-hidden'>
    {/* <div> */}
      <Nav/>
      <Welcome/>
      <h4 className={`${onTabletOrMobile?'f21 px5':'f36'} ct lh48 bold500 mt50 mb50 text-blue`}>You need everything to stand out right!</h4>
      <div className={`grid ${onTabletOrMobile?'gapy40 mb30':'grid3 gap20'} mx20p`}>
        <Whatwedo/>
      </div>
      <div className='mt50'>
        <h2 className={`ct ${onTabletOrMobile?'f34':'f54'} ptserif bold lh80 mb30 text-red`}>Our Services</h2>
        <div className={`${onTabletOrMobile?'d-none':'relative'}`}>
          <div className='flex space-between absolute left0 right0 mt10 mx10'>
            <h5 className='text-white f36'>Application and Website Development</h5>
            {/* icons */}
            <a href="/">
              <FaArrowCircleDown size='30' fill='#FFFFFF'/>
            </a>
            
          </div>
          <div>
            <img src="images/HomePage/Brandr hero 03 1.png" alt="ss" className='max-w-full'/>  
          </div>
        </div>
        <div className={`${onTabletOrMobile?'d-none':'mt100 px5'}`}>
          <h5 className='bold500 f36 mb10 text-blue'>Light, Fast &amp; Powerful Websites</h5>
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
        <div className={`${onTabletOrMobile?'d-none':'px5 pr10 mt30'}`}>
          <h3 className='bold500 f36 mb10 text-gray-200'>See featured Case Studies</h3>
          <div className='grid gapx10 grid4 '>
            <Projects/>
          </div>
        </div>
        <div className={`${onTabletOrMobile?'mt30':'mt50'}`}>
          <Skillsets/>
        </div>
      </div>
      <div className='px5 mt50'>
        <h4 className={`${onTabletOrMobile?'f22':'f36'} bold500 text-blue mb30 afterdiv`}>ABOUT US</h4>
        <div className={`grid space-between ${onTabletOrMobile?null:'grid2-60-40'}`}>
          <div className={`${onTabletOrMobile?'px5 pr15per':null}`}>
            <h2 className={`${onTabletOrMobile?'f33 lh37':'f84 lh80'} serif bold text-red mb20`}>We are founded
                on the principle
                of creativity and excellence
            </h2>
            <p className={`${onTabletOrMobile?'f19':'f24'} lh32 inter bold500 text-blue-200 -ls2em`}>With our expertise, we fuel your social media and create apps that promote engaging experience for your business.</p>
          </div>
          <div className={`${onTabletOrMobile?'mt20 self-center':'self-end'}`}>
            <img src="./images/HomePage/Group.png" alt="" className={`${onTabletOrMobile?'w-200 h-200':null}`}/>
          </div>
        </div>
        <div className={`mt70 grid ${onTabletOrMobile?'px5 gapy40':'grid2'}`}>
          <div className=''>
            <h5 className={`bold500 ${onTabletOrMobile?'f29':'f36'} text-blue mb15`}>Mission Statement</h5>
            <div className={`${onTabletOrMobile?null:'pr30per'}`}>
              <p className={`${onTabletOrMobile?'jt':null} f16 lh26 text-blue-400`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                  mus.</p>
              <p className={`${onTabletOrMobile?'jt':null} f16 lh26 text-blue-400`}>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div> 
          <div className=''>
            <h5 className={`bold500 ${onTabletOrMobile?'f29':'f36'} text-blue mb15`}>Vision and VALUEs</h5>
            <div className={`${onTabletOrMobile?null:'pr30per'}`}>
              <p className={`${onTabletOrMobile?'jt':null} f16 lh26 text-blue-400`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                  mus.</p>
              <p className={`${onTabletOrMobile?'jt':null} f16 lh26 text-blue-400`}>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>

          </div>                   
        </div>
      </div>
      <div>
        <div className={`${onTabletOrMobile?null:'bg-light-green'} mt100  p10 py`}>
            <div className='ct'>
              <h4 className={`${onTabletOrMobile?'f29':'f36'} bold500 text-blue mb10`}>What our Clients say</h4>
              <p className={`f16 lh26 text-blue-500 ${onTabletOrMobile?'px15':'px25per'}`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>    
            </div>
            <div className={`${onTabletOrMobile?'px3':'grid3 gapx20 px10'} grid gapy40 mt50`}>
              <Testimonials/>
            </div>
            <p className='bold400 f16 ct text-blue-500 mt50'>Connect with us on socials to read more Awards and Accolades we have baged!</p>            
        </div>
        <div className={`${onTabletOrMobile?'py20':'py50 bg-yellow-200'}`}>
              <h4 className={`text-blue ct ${onTabletOrMobile?'f18':'f47'} bold500`}>Clients we have worked with</h4>
              <div className={`${onTabletOrMobile?'px5':'px10'} py25 mt20 flex space-between flexalign-start`}>
                <img src="images/HomePage/icons/hooli.png" alt="" className={`${onTabletOrMobile?'w-50':null} `}/>
                <img src="images/HomePage/icons/lyft.png" alt="" className={`${onTabletOrMobile?'w-50':null} `}/>
                <img src="images/HomePage/icons/leaf.png" alt="" className={`${onTabletOrMobile?'w-50':null} `}/>
                <img src="images/HomePage/icons/stripe.png" alt="" className={`${onTabletOrMobile?'w-50':null} `}/>
                <img src="images/HomePage/icons/aws.png" alt="" className={`${onTabletOrMobile?'w-50 d-none':null} `}/>
                <img src="images/HomePage/icons/teddybear.png" alt="" className={`${onTabletOrMobile?'w-50 d-none':null} `}/>
                {/* icons full here */}
              </div>

        </div>   
        <div className={`${onTabletOrMobile?null:'bg-blue-200'} text-white py50`}>
          <div className='mb30'>
            <h3 className={`${onTabletOrMobile?'f33':'f66'} poppins ct bold mb10 text-white`}>Meet Our Team</h3>
            <p className={`${onTabletOrMobile?'f18 lh26 px3':'f22 lh36 px10'} opensans ct text-white`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className={` ${onTabletOrMobile?'grid2 px5 gapx20':'grid4 px5'} grid gapy20`}>
            <Team/>
          </div>
        </div>
        <div className={`${onTabletOrMobile?null:'bg-gray'} py50 grid grid2 px3`}>
          <div className='pr15per'>
            <h4 className='bold monte f40 lh57 text-white ls2 mb15'>Got a project? Get in touch with us now! </h4>
            <ContactForm/>
            <p className='mt20 text-white f16 bold monte ls1'>Looking for an internship opportunity? <Link href={'/'}><a className='text-blue-200 underline'>Click Here</a></Link> to register</p>
          </div>
          <img src='images/HomePage/Group (1).png' alt="" className='mt50'/>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}
