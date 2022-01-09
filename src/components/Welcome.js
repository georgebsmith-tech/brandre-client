import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';


export default function Welcome() {
    const onTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (        
        <div className={`${onTabletOrMobile? 'bg-blue-200 h-screen60':null} x-hidden relative`}>           
            <div className={`${onTabletOrMobile? 'pr30per px5 pt30 ':'absolute ml20 x-sides-custom y-sides-0 top5 '} z-most`}>
                <h2 className={`bold ptserif text-red bg-blue-200 ${onTabletOrMobile? 'lh46 f46':'lh80 f84'}`}>Be Found Online!</h2>
                <h2 className={`bold ptserif text-red ${onTabletOrMobile? 'lh46 f46':'lh80 f84'}`}>Its simple!</h2>
                <p className={`${onTabletOrMobile? 'lh13 f13 -ls2em mt20':'f24 lh32 ml-5 mt35'} inter bold500 text-white `}>With our expertise, we fuel your social media and create apps that promote engaging experience for your business.</p>
            </div>
            <div className={`${onTabletOrMobile? 'mt50':'cliptop w-screen max-w-full x-hidden'}`}>
                <img src="images/HomePage/Brandr hero 01 1.png" alt="" className={`${onTabletOrMobile? '-ml25per full-width':'max-w-full max-h-full'}`}/>
            </div>
        </div>
    )
}
// flex f14 space-between