import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';

import {FaArrowCircleRight} from 'react-icons/fa'


export default function Skillsets() {
    const onTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
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
                <div key={index} className='w-full bg-blue-200 flex space-between px5 py10 bdgray'>
                    <p className={`${onTabletOrMobile?'f16 align-self-center':'f36'} bold400 text-white`}>{skill}</p>
                    <Link href={'/'}>
                        <a><FaArrowCircleRight size='30' fill='#FFFFFF'/></a>
                    </Link>
                </div>
            )}
        </>
    )
}