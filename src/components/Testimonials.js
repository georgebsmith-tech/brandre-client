import Link from 'next/link'
export default function Testimonials() {
    const testimonials=[{
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:4,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:4,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:4,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:4,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:4,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:4,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    }
    ]
    return (
        <>
            {testimonials.map(({imgScr, name, job, rating,description}, index)=>(
                <div key={index} className='monte bg-white py30 px35 bdr5 bd-g'>
                    <div>
                        {index}
                        {rating}
                    </div>
                    <p className='ls2 text-gray-300 bold600 f14 lh24 mt10'>{description}</p>
                    <div className='mt20 flex gap10'>
                        <img src={`images/HomePage/${imgScr}`} alt=""/>
                        <div className='align-self-center'>
                            <p className='ls2 f14 bold600 text-yellow'>{name}</p>
                            <p className='ls2 f14 bold600 mt5 text-blue-300'>{job}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>               
        
    )
}
// flex f14 space-between