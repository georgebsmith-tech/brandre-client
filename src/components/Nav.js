import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';

export default function Nav() {
    const onTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
    return (
      <div className={`grid grid2 p10 ${onTabletOrMobile?null:'plr30'} bg-blue space-between z100`}> 
        <img src="./images/HomePage/Frame 1.png" alt=""/>
        <div className={`${onTabletOrMobile?'block self-end': 'grid'} grid3 p10`}>
            <div className={`f14 ${onTabletOrMobile? 'd-none':'flex space-around'}`}>
                <Link href='p20 text-white'><a className='nb p15 text-white'>HomeChanges</a></Link>
                <Link href='p20 text-white'><a className='nb p15 text-white mr10'>ServiceChanges</a></Link>
                <Link href='p20 bg-red text-white'><a className='nb p15 text-white'>About Us</a></Link>
                <Link href='p20 text-white'><a className='nb p15 text-white'>Team</a></Link>  
            </div>
            {onTabletOrMobile?null:<Link href='p1 text-white'><a className='nb ml20 p15 text-white f14 bg-red ct br2'>Contact</a></Link>}
            <div className='harmburger pointer'>
                <span className="bar" style={{width:'40px'}}></span>
                <span className="bar" style={{width:'32px', marginLeft:'8px'}}></span>
                <span className="bar" style={{width:'24px', marginLeft:'16px'}}></span>
            </div>
        </div>  
      </div>
    )
}
// flex f14 space-between