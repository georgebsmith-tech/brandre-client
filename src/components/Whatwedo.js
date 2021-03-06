export default function Whatwedo() {
    const tasks=[{
        imgScr:'Combined Shape.png',
        title:'Repurpose',
        description:'Our team of experts would help unluck your brands purpose through research and brainstorming for disruptive ideas'
    },
    {
        imgScr:'Combined Shape.png',
        title:'Rework',
        description:'Using modern techiques we reposition your business to succeed where the competion will fail, we do the hard work!'
    },
    {
        imgScr:'Combined Shape.png',
        title:'Repeat',
        description:'Our systems lets you relax while your business grows, adapt and innovate constantly, while leaving you profitable.'
    }
    ]
    return (
        <>
            {tasks.map(({imgScr, title, description}, index)=>(
                <div key={index} className='whatweitem'>
                    <img src={`images/HomePage/${imgScr}`} alt="task" className='mx-auto'/>
                    <div className='ct'>
                        <p className='text-blue bold500 title'>{title}</p>
                        <p className='text-gray desc'>{description}</p>
                    </div>
                </div>
                // <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>               
    
    )
}
// flex f14 space-between