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
            {testimonials.map(({imgScr, name, job, rating,description})=>(
                <div>
                    <div>
                        {rating}
                    </div>
                    <p>{description}</p>
                    <div>
                        <img src={`images/HomePage/${imgScr}`} alt=""/>
                        <div>
                            <p>{name}</p>
                            <p>{job}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>               
        
    )
}
// flex f14 space-between