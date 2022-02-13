export default function Summary() {
    const summ=[{
        imgScr:'clock.png',
        title:'Lorem Ipsum',
        description:'uctor tincidunt ultricies tortor felis commodo sed at'
    },
    {
        imgScr:'diamond.png',
        title:'Lorem Ipsum',
        description:'uctor tincidunt ultricies tortor felis commodo sed at'
    },
    {
        imgScr:'tick.png',
        title:'Repeat',
        description:'uctor tincidunt ultricies tortor felis commodo sed at'
    },
    {
        imgScr:'arrowupdown.png',
        title:'Lorem Ipsum',
        description:'uctor tincidunt ultricies tortor felis commodo sed at'
    }
    ]
    return (
        <>
            {summ.map(({imgScr, title, description}, index)=>(
                <div key={index} className='summItem'>
                    {/* <img src="./images/ProjectPage/icons/arrowright.png" alt="" /> */}
                    <img src={`./images/ProjectPage/icons/${imgScr}`} alt="task" className=''/>
                    <div className=''>
                        <p className='title'>{title}</p>
                        <p className='desc'>{description}</p>
                    </div>
                </div>
                // <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>               
    
    )
}
// flex f14 space-between