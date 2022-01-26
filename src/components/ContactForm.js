import Link from 'next/link'
import {FaCaretSquareDown as FaCaretDown} from 'react-icons/fa'
   import useMediaQuery from '../hooks/UseMediaQuery'
export default function ContactForm() {
    const onTabletOrMobile = useMediaQuery(1300)
    return (
        <form action="" className={`${onTabletOrMobile?'px5':null}`}>
            <input className={`${onTabletOrMobile?'full-width mb20':'d-none'}  f14 text-gray-500 ls2 bdr5 bdg2 p10 monte`} placeholder='Select Reason for Contacting Us.'/>
            <div className={`${onTabletOrMobile?'gapx10':'gapx20 full'} grid grid2`}>
              <input type="text" placeholder='Full Name' className={`${onTabletOrMobile ?'w-42screen':null} f14 text-gray-500 ls2 bdr5 bdg2 p10 monte`}/>
              <input type="text" placeholder='example@gmail.com' className={`${onTabletOrMobile ?'w-42screen':null} f14 text-gray-500 ls2 bdr5 bdg2 p10 monte`}/>
            </div>
            <div className={`${onTabletOrMobile?'d-none':'gapx20'} grid grid2 mt20`}>
              <div className='relative'>
                <input type="text" className=' f14 text-gray-500 ls2 bdr5 bdg2 p10 full-width monte' placeholder='Please Select'/>
                {/* icon here */}
                <button className='bg-transp absolute no-bd left90per mt10'>
                  <img src="./images/HomePage/icons/caretdown.png" alt="" className={`${onTabletOrMobile?null:null}`}/>
                </button>
              </div>
              <div className='relative'>
                <input type="text" className=' f14 text-gray-500 ls2 bdr5 bdg2 p10 full-width monte' placeholder='4:00 Available'/>
                {/* icon her */}
                <button className='bg-transp absolute no-bd left90per mt10'>
                  <img src="./images/HomePage/icons/caretdown.png" alt="" className={`${onTabletOrMobile?null:null}`}/>
                </button>
              </div>
              
            </div>
            <div className={`${onTabletOrMobile?'gapx10 mt20':'d-none'} grid grid2`}>
              <input type="text" placeholder='+234' className={`${onTabletOrMobile ?'w-25screen ct':null} f14 text-gray-500 ls2 bdr5 bdg2 p10 monte`}/>
              <input type="text" placeholder='08166453677' className={`${onTabletOrMobile ?'w-75screen':null} f14 text-gray-500 ls2 bdr5 bdg2 p10 monte`}/>
            </div>
            <textarea placeholder='Message' className='mt20 bdr5 bdg2 p10 full-width monte f14 text-gray-500' rows='10'/>
            <Link href='/'>
               <button className='no-bd text-white bg-blue-200 px24 py20 mt30 br8 f18'>Get in touch</button>
            </Link>
            
        </form>
    )
}
// flex f14 space-between