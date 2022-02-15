import Link from 'next/link'
import {FaArrowCircleRight, FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import SkillDetails from './SkillDetails'
import { useState} from 'react'   

export default function Skillsets() {
    const [activeSkill, setActiveSkill]=useState(0)    
    const skills=[]
    // const changeSkill=(e)=>{
    //     console.log('clicked')
    //     setActiveSkill(9)
    // }
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
                        {/* setActiveSkill(9) */}
                        <button>
                            <FaArrowRight className='arrow' onClick={activeSkill==index?()=>setActiveSkill(9):()=>setActiveSkill(index)}/>
                        </button>
                        {/* {activeSkill!=index?
                            <button className='bg-blue-200' onClick={()=>setActiveSkill(index)}>
                                <FaArrowRight fill='#FFFFFF' className='arrow'/>
                                
                                <img src="images/HomePage/icons/semicircle.png" alt="ss" className='absolute circlepos'/>
                            </button>
                        :
                            <button onClick={()=>setActiveSkill(9)}>
                                <FaArrowLeft className='arrow' fill='#0E0A5C'/>
                            </button>
                        
                        }   */}
                        
                        
                    </div>
                    {activeSkill==index && <SkillDetails/>}
                </div>
            )}
        </>
    )
}