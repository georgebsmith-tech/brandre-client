import Link from 'next/link'
export default function Nav() {
    return (
      <div className='grid grid2 p10 plr30 bg-blue space-between z100'> 
        <img src="./images/HomePage/Frame 1.png" alt=""/>
        <div className='grid grid3 p10'>
            <div className='f14 flex space-around'>
                <Link href='p20 text-white'><p className='nb p15 text-white'>Home</p></Link>
                <Link href='p20 text-white'><p className='nb p15 text-white mr10'>Service</p></Link>
                <Link href='p20 bg-red text-white'><p className='nb p15 text-white'>About Us</p></Link>
                <Link href='p20 text-white'><p className='nb p15 text-white'>Team</p></Link>  
            </div>
            <Link href='p1 text-white'><p className='nb ml20 p15 text-white f14 bg-red ct br2'>Contact</p></Link>
            <div className='harmburger'>
                <span className="bar" style={{width:'40px'}}></span>
                <span className="bar" style={{width:'32px', marginLeft:'8px'}}></span>
                <span className="bar" style={{width:'24px', marginLeft:'16px'}}></span>
            </div>
        </div>  
      </div>
    )
}
// flex f14 space-between