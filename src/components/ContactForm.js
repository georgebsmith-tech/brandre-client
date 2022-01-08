import Link from 'next/link'
export default function ContactForm() {
    return (
        <form action="">
            <div className='grid grid2 gapx20'>
              <input type="text" className=' f14 text-gray-500 ls2 bdr5 bdg2 p10 monte'/>
              <input type="text" className=' f14 text-gray-500 ls2 bdr5 bdg2 p10 monte'/>
            </div>
            <div className='grid grid2 gapx20 mt20'>
              <div className=''>
                <input type="text" className=' f14 text-gray-500 ls2 bdr5 bdg2 p10 full-width monte' placeholder='4:00 Available'/>
                {/* icon here */}
              </div>
              <div>
                <input type="text" className=' f14 text-gray-500 ls2 bdr5 bdg2 p10 full-width monte' placeholder='4:00 Available'/>
                {/* icon her */}
              </div>
              
            </div>
            <textarea placeholder='Message' className='mt20 bdr5 bdg2 p10 full-width monte f14 text-gray-500'/>
            <Link href='/'>
               <button className='no-bd text-white bg-blue-200 px24 py20 mt30 br8 f18'>Get in touch</button>
            </Link>
            
        </form>
    )
}
// flex f14 space-between