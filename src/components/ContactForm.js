import Link from 'next/link'
import {FaCaretSquareDown as FaCaretDown} from 'react-icons/fa'
   
export default function ContactForm() {
    
    return (
        <form action="" className='contactform'>
            <input className='reason' placeholder='Select Reason for Contacting Us.'/>
            <div className='nameemail'>
              <input type="text" placeholder='Full Name'/>
              <input type="text" placeholder='example@gmail.com'/>
            </div>
            <div className='selectgrid'>
              <div >
                <input type="text" placeholder='Please Select'/>
                {/* icon here */}
                <button >
                  <img src="./images/HomePage/icons/caretdown.png" alt="" />
                </button>
              </div>
              <div >
                <input type="text" placeholder='4:00 Available'/>
                {/* icon her */}
                <button>
                  <img src="./images/HomePage/icons/caretdown.png" alt=""/>
                </button>
              </div>
              
            </div>
            <div className='phonelinegrid'>
              <input type="text" placeholder='+234' className='ctrycode'/>
              <input type="text" placeholder='08166453677' className='phone'/>
            </div>
            <textarea placeholder='Message' rows='10'/>
            <Link href='/'>
               <button className='submit-btn'>Get in touch</button>
            </Link>
            
        </form>
    )
}
// flex f14 space-between