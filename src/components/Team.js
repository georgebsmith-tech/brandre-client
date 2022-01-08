import Link from 'next/link'
export default function Team() {
    const team=[{
        imgScr:'Rectangle 7.png',
        name:'Regina Miles',
        job:'Designer',
        
    },
    {
        imgScr:'Rectangle 7.png',
        name:'Regina Miles',
        job:'Designer',
        
    },
    {
        imgScr:'Rectangle 7.png',
        name:'Regina Miles',
        job:'Designer',
        
    },
    {
        imgScr:'Rectangle 7.png',
        name:'Regina Miles',
        job:'Designer'
    }
    ]
    return (
        <>
            {team.map(({imgScr, name, job}, index)=>(
                <div key={index}>
                    <img src={`images/HomePage/${imgScr}`} alt=""/>
                    <div>
                        <p className='ct bold f36 mb5 text-white poppins'>{name}</p>
                        <p className='ct italic f18 text-white opensans'>{job}</p>
                    </div>
                </div>
            ))}
        </>               
        
    )
}
// flex f14 space-between