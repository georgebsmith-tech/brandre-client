import Link from 'next/link'
import {FaArrowCircleRight, FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import SkillDetails from './SkillDetails'
import { useState} from 'react'   

export default function Skillsets() {
    const [activeSkill, setActiveSkill]=useState(0)    
    const skills=[]
    const fd=()=>{
        console.log('clicked')
        setActiveSkill(2)
        console.log(activeSkill)
    }
    // if(onTabletOrMobile){
    //     skills.push('Application/ Website Development')
    // }
    skills.push('Application/ Website Development','Branding and Graphics design','Consultation and Business Dev'
  ,'Digital Marketing/ Advertising')
    return (
        <>
            {skills.map((skill, index) =>
                <div key={index} className=''>
                    <div className={`item bg-blue-200 skillset ${activeSkill} ${activeSkill==index && ' isActive'}`}>
                        <h5 className='text-white'>{skill}</h5>
                        {activeSkill!=index?
                            <button className='bg-blue-200' onClick={()=>setActiveSkill(index)}>
                                <a className=''><FaArrowRight fill='#FFFFFF' className='arrow'/></a>
                                
                                <img src="images/HomePage/icons/semicircle.png" alt="ss" className='absolute circlepos'/>
                            </button>
                        :
                            <a onClick={()=>setActiveSkill(9)}>
                                <FaArrowLeft size='30' fill='#0E0A5C'/>
                            </a>
                        
                        }  
                        
                        
                    </div>
                    {activeSkill==index && <SkillDetails/>}
                </div>
            )}
        </>
    )
}