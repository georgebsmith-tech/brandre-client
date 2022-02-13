import Link from 'next/link'
import {useState} from 'react'
import ProjectShow from './ProjectShow'

export default function Project({show, onShow}) {
    // const [showProject,setShowProject]=useState(false)
    const [shown,setShown]=useState(false);

    const changeShow=()=>{
        console.log('yes it is not')
        console.log(showProject)
        setShowProject(false)
        
    }
    const onCloses=()=>{
        console.log('wydgdduh')
        setShown(!shown)        
     }
    const projects=[{
        imgScr:'image 2.png',
        title:'long established',
        
    },
    {
        imgScr:'image 4.png',
        title:'long established'
        
    },
    {
        imgScr:'image 5.png',
        title:'long established'
    },
    {
        imgScr:'image 4.png',
        title:'long established'
        
    }
    ]
    return (
        <>
            {projects.map(({imgScr, title}, index)=>(
                <div key={index} className='box-shad1 item pointer' onClick={()=>onShow()}>
                    <img src={`images/ProjectPage/${imgScr}`} alt="task" className=''/>
                    <p className='inter text-blue-400'>{title}</p>
                    {/* <ProjectShow show={showProject} onClose={changeShow}/> */}
                </div>
                // <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
            
        </>               
        
    )
}
// flex f14 space-between