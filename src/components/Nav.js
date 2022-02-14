import Link from 'next/link'
import { useState, useEffect } from 'react'   

function NavLink({classname}){
  const [scrollvar,setScrollvar]=useState('')
  useEffect(()=>{
    if(scrollvar){
      const scrolltoSection=document.getElementById(scrollvar)
      scrolltoSection.scrollIntoView({behavior:'smooth'})
    }
    
  },[scrollvar])
  return(
    <div className={`navLinks ${classname}`}>
      <div className='navMajLinks'>
          <Link href='#'><a className='mr10' onClick={()=>setScrollvar('about')}>About Us</a></Link>
          <Link href='#'><a className='' onClick={()=>setScrollvar('service')}>Service</a></Link>
          <Link href='#'><a className='' onClick={()=>setScrollvar('team')}>Team</a></Link>  
      </div>
      <Link href='#'><a className='contactLink' onClick={()=>setScrollvar('contact')}>Contact</a></Link>
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