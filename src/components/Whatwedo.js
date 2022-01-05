export default function Whatwedo() {
    const tasks=[{
        imgScr:'image 5.png',
        title:'Repurpose',
        description:'Our team of experts would help unluck your brands purpose through research and brainstorming for disruptive ideas'
    },
    {
        imgScr:'image 5.png',
        title:'Rework',
        description:'Using modern techiques we reposition your business to succeed where the competion will fail, we do the hard work!'
    },
    {
        imgScr:'image 5.png',
        title:'Repeat',
        description:'Our systems lets you relax while your business grows, adapt and innovate constantly, while leaving you profitable.'
    }
    ]
    return (
        <>
            {tasks.map(({imgScr, title, description})=>(
                <div>
                    <img src={`images/HomePage/${imgScr}`} alt="task"/>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
                // <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>               
        
    )
}
// flex f14 space-between