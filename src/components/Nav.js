import Link from 'next/link'
import { useState } from 'react'   

function NavLink({classname}){
  return(
    <div className={`navLinks ${classname}`}>
      <div className='navMajLinks'>
          <Link href='p20 text-white'><a className='mr10'>About Us</a></Link>
          <Link href='p20 bg-red text-white'><a className=''>Service</a></Link>
          <Link href='p20 text-white'><a className=''>Team</a></Link>  
      </div>
      <Link href='p1 text-white'><a className='contactLink'>Contact</a></Link>
    </div>    
  )
}
export default function Nav() {
    const [toggleNav,setToggleNav]=useState(false)
    return (
      <div className='navDiv'>
 
        <img src="./images/HomePage/Frame 1 (1).png" alt=""/>
        <div className='harmburger pointer' onClick={()=> setToggleNav(!toggleNav)}>
          {/* {if(toggleNav) */}
          {!toggleNav? <>
              <span className="bar" style={{width:'34px'}}></span>
              <span className="bar" style={{width:'30px', marginLeft:'4px'}}></span>
              <span className="bar" style={{width:'26px', marginLeft:'8px'}}></span>
            </>
            :<img src="./images/HomePage/icons/close icon.png" alt=""/>}
        </div>
        
        <NavLink classname='hideOnSm'/>
        {toggleNav && < NavLink classname='hideOnLg'/>}
      </div>
    )
}
// flex f14 space-between