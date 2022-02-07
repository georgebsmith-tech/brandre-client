import Link from 'next/link'
   

export default function Nav() {
    return (
      <div className='navDiv'> 
        <img src="./images/HomePage/Frame 1 (1).png" alt=""/>
        <div className='navLinks'>
            <div className='navMajLinks'>
                <Link href='p20 text-white'><a className='mr10'>Service</a></Link>
                <Link href='p20 bg-red text-white'><a className=''>About Us</a></Link>
                <Link href='p20 text-white'><a className=''>Team</a></Link>  
            </div>
            <Link href='p1 text-white'><a className='contactLink'>Contact</a></Link>
            {/* <div className='harmburger pointer'>
                <span className="bar" style={{width:'40px'}}></span>
                <span className="bar" style={{width:'32px', marginLeft:'8px'}}></span>
                <span className="bar" style={{width:'24px', marginLeft:'16px'}}></span>
            </div> */}
        </div>  
      </div>
    )
}
// flex f14 space-between