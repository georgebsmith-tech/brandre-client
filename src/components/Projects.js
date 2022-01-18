import Link from 'next/link'
export default function Projects() {
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
    }
    ]
    return (
        <>
            {projects.map(({imgScr, title}, index)=>(
                <div key={index} className='box-shad1 py20'>
                    <img src={`images/HomePage/${imgScr}`} alt="task" className='w300h317'/>
                    <p className='inter bold f20 ml5 mt10 text-blue-400'>{title}</p>
                </div>
                // <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
            <div className='relative'>
                <img src={`images/HomePage/${projects[projects.length-1].imgScr}`} className='w300h317' alt=""/>
                <div className='absolute position-full backdrop flex flex-cols'>
                    <div className='m-auto f25 text-white'>
                        <Link href={'/'}>See more Projects</Link>
                    </div>
                    
                </div>            
            </div>
        </>               
        
    )
}
// flex f14 space-between