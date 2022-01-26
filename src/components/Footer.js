import Link from 'next/link'
import useMediaQuery from '../hooks/UseMediaQuery'

export default function Footer() {
    const onTabletOrMobile = useMediaQuery(1300)
    return (
        <footer>
            <div className={`${onTabletOrMobile?'px10':'pl10per pr10per'} bg-blue-300 py50`}>
                <div className='mb30'>
                    <div className={` ${onTabletOrMobile?'flex-cols align-center gapy20 mb20':null} flex space-between`}>
                        <h5 className={`${onTabletOrMobile?'f20':'f24'} monte bold ls1 mb10 text-white`}>Follow @Brandr.ng </h5>
                        <div className='flex space-between flexalign-start gapx20'>
                            <img src="images/HomePage/icons/facebook.png" alt=""/>
                            <img src="images/HomePage/icons/twitter.png" alt=""/>
                            <img src="images/HomePage/icons/insta.png" alt=""/>
                            <img src="images/HomePage/icons/youtube.png" alt=""/>
                            {/* fb,twitter, insta, youtube */}
                        </div>
                    </div>
                    <hr className={`${onTabletOrMobile?'full-width':'w90'} bgblue `}/>
                </div>
                <ul className={`grid ${onTabletOrMobile?'grid2':'grid5'}`}>
                    <li>
                        <p className='monte bold ls1 mb15 text-white f16'>Company Info</p>
                        <ul>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>About Us</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Clients</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Internship</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Teams</li>
                        </ul>
                    </li>
                    <li>
                        <p className='monte bold ls1 mb15 text-white f16'>Features</p>
                        <ul>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Web/ app dev</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Branding</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Printing</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Social media</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Web/ app dev</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Branding</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Printing</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>Social media</li>
                        </ul>
                    </li>
                    <li>
                        <p className='monte bold ls1 mb15 text-white f16'>Resources</p>
                        <ul>
                        <li className='mb10 text-gray-500 f14 ls2 bold600'>Download Profile</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>YouTube Lessons</li>
                            <li className='mb10 text-gray-500 f14 ls2 bold600'>FAQ</li>
                        </ul>
                    </li>
                    <div>
                        <p className='monte bold ls1 mb15 text-white f16'>Get In Touch</p>
                        <div className='relative mb5'>
                            <input type="text" placeholder='Your Email' className='full-width f14 text-gray-500 ls2 bdr5 bdg2 p10 monte'/>
                            <Link href='/'>
                                <button className='f14 ls2 monte text-white ct p10 absbox absolute position-full left75'>Subscribe</button>
                            </Link>
                            
                        </div>
                        <p className='f12 monte text-gray-500'>Lorem impsum dolor amit</p>
                    </div>
                </ul>    
            </div>
            
            
            <div className='bg-red pl10per py25'>
                <p className={`bold600 ls2 monte ${onTabletOrMobile?'f11':'f14'} text-white`}>Made With Love By BrandR All Right Reserved 2022</p>
            </div>
        </footer>
        
    )
}
// flex f14 space-between