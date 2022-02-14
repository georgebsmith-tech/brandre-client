import Link from 'next/link'
import {FaCaretSquareDown as FaCaretDown} from 'react-icons/fa'
   
export default function ContactForm() {
    
    return (
        <form action="" className='contactform'>
            <div className='reasondiv'>
                {/* <span> */}
                  <input className='reason' placeholder='Select Reason for Contacting Us.'/>
                  <button className='reason-caret'>
                    <img src="./images/HomePage/icons/caretdown.png" alt="" />
                  </button>
                {/* </span> */}
            </div>          
            <div className='nameemail'>
              <input type="text" placeholder='Full Name'/>
              <input type="text" placeholder='Enter Email Address'/>
            </div>
            <div className='phonejob'>
              <input type="text" placeholder='Enter Phone Number'/>
              {/* <input type="text" placeholder='Select job category'/> */}
              <div className='flex jobgroup'>
                <input type="text" className='min-w-full' placeholder='Select job category'/>
                <button className='job-caret'>
                  <img src="./images/HomePage/icons/caretdown.png" alt=""/>
                </button>
              </div>
              
            </div>
            <textarea placeholder='Enter your message here describing your job' rows='10'/>
            <Link href='/'>
               <button className='submit-btn text-white'>Get in touch</button>
            </Link>
            
        </form>
    )
}
// flex f14 space-between