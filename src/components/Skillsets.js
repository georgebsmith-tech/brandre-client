import Link from 'next/link'
   

import {FaArrowCircleRight, FaArrowRight} from 'react-icons/fa'


export default function Skillsets() {
    
    const skills=[]
    // if(onTabletOrMobile){
    //     skills.push('Application/ Website Development')
    // }
    skills.push('Application/ Website Development','Branding and Graphics design','Consultation and Business Dev'
  ,'Digital Marketing/ Advertising')
    return (
        <>
            {skills.map((skill, index) =>
                <div key={index} className='item bg-blue-200 skillset'>
                    <p className='text-white'>{skill}</p>
                    <button className='bg-blue-200'>
                        {/* <span className='beforebd beforepos'>
                            &nbsp;
                        </span> */}
                        
                        <Link href={'/'}>
                            <a className='z-most'><FaArrowRight fill='#FFFFFF' className='arrow'/></a>
                        </Link>
                        <img src="images/HomePage/icons/semicircle.png" alt="ss" className='absolute circlepos'/>
                    </button>
                    
                </div>
            )}
        </>
    )
}