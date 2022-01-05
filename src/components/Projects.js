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
            {projects.map(({imgScr, title})=>(
                <div>
                    <img src={`images/HomePage/${imgScr}`} alt="task"/>
                    <p>{title}</p>
                </div>
                // <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
            <div>
                <img src={`images/HomePage/${projects[projects.length-1].imgScr}`} alt=""/>
                <Link href={'/'}>See more Projects</Link>
            </div>
        </>               
        
    )
}
// flex f14 space-between