import Link from 'next/link'

   import useMediaQuery from '../hooks/UseMediaQuery'

export default function Team() {
    const onTabletOrMobile = useMediaQuery(1300)
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
                <div key={index} className={`${onTabletOrMobile?'flex flex-cols align-center':null}`}>
                    <img src={`images/HomePage/${imgScr}`} alt="" className={`${onTabletOrMobile?'w-150':null}`}/>
                    <div>
                        <p className={`${onTabletOrMobile?'f23':'f36'} ct bold mb5 text-white poppins`}>{name}</p>
                        <p className={`${onTabletOrMobile?null:null} ct italic f18 text-white opensans`}>{job}</p>
                    </div>
                </div>
            ))}
        </>               
        
    )
}
// flex f14 space-between