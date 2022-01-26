import Link from 'next/link'
   import useMediaQuery from '../hooks/UseMediaQuery'

import {FaArrowCircleRight, FaArrowRight} from 'react-icons/fa'


export default function Skillsets() {
    const onTabletOrMobile = useMediaQuery(1300)
    const skills=[]
    if(onTabletOrMobile){
        skills.push('Application/ Website Development')
    }
    skills.push('Branding and Graphics design',
    'Consultation and Business Dev',
    'Digital Marketing/ Advertising')
    return (
        <>
            {skills.map((skill, index) =>
                <div key={index} className={`${onTabletOrMobile?'bdblue py20':'bdgray py10'} w-full bg-blue-200 flex space-between px5 `}>
                    <p className={`${onTabletOrMobile?'f16 align-self-center':'f36'} bold400 text-white`}>{skill}</p>
                    <button className='relative bg-blue-200 no-bd'>
                        {/* <span className='beforebd beforepos'>
                            &nbsp;
                        </span> */}
                        
                        <Link href={'/'}>
                            <a className='z-most'><FaArrowRight size='30' fill='#FFFFFF'/></a>
                        </Link>
                        <img src="images/HomePage/icons/semicircle.png" alt="ss" className='absolute beforepos'/>
                    </button>
                    
                </div>
            )}
        </>
    )
}