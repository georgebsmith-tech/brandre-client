import Link from 'next/link'
export default function Project() {
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
                <div key={index} className='box-shad1 item'>
                    <img src={`images/HomePage/${imgScr}`} alt="task" className='w300h317'/>
                    <p className='inter text-blue-400'>{title}</p>
                </div>
                // <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
            
        </>               
        
    )
}
// flex f14 space-between