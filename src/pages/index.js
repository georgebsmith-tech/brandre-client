import Link from 'next/link'
import Nav from '../components/Nav'
import Welcome from '../components/Welcome'
import Whatwedo from '../components/Whatwedo'
import Projects from '../components/Projects'
import Skillsets from '../components/Skillsets'
import Testimonials from '../components/Testimonials'


export default function Home() {
  return (
    <div>
      <Nav/>
      <Welcome/>
      <h4>You need everything to stand out right!</h4>
      <div>
        <Whatwedo/>
      </div>
      <div>
        <h2>Our Services</h2>
        <div>
          <div>
            <h5>Application and Website Development</h5>
            {/* icons */}
          </div>
          
          <img src="" alt=""/>
        </div>
        <div>
          <div>
            <h5>Light, Fast & Powerful Websites</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>
          <Link href={'/'}>Get in touch</Link>
        </div>
        <div>
          <h3>See feautured Case Studies</h3>
          <div>
            <Projects/>
          </div>
        </div>
        <div>
          <Skillsets/>
          <h3>eeepeleaaaaqa</h3>
        </div>
      </div>
      {/* <div>
        <h4>ABOUT US</h4>
        <div>
          <div>
            <h2>We are founded
                on the principle
                of creativity and excellence
            </h2>
            <p>With our expertise, we fuel your social media and create apps that promote engaging experience for your business.</p>
          </div>
          <div>
            <img src="./images/HomePage/Group.png" alt=""/>
          </div>
        </div>
        <div>
          <div>
            <h5>Mission Statement</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div> 
          <div>
            <h5>Vision and VALUEs</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>                   
        </div>
      </div>
      <div>
        <div>
          <h4>What our Clients say</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>    
        </div>
        <div>
          <Testimonials/>
        </div>
        <p>Connect with us on socials to read more Awards and Accolades we have baged!</p>            
      </div> */}
    </div>
  )
}
