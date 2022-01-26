// import Link from 'next/link'
import {FaStar} from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive';


export default function Testimonials() {
    const onTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
    const ratingAlgo=(rating)=>{
        let presentRating=[]
        for (let index = 1; index <= 5; index++) {
            if(index>5){
                break
            }
            if(index>rating){
                presentRating.push(<FaStar key={index} size='18' stroke='#F3CD03' strokeWidth='30' fill='#FFFFFF'/>)
                continue
            }
            presentRating.push(<FaStar key={index} size='18' fill='#F3CD03' strokeWidth='30' stroke='#F3CD03'/>)           
        }
        return presentRating
    }
    const testimonials=[{
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:4,
        presentRating: ratingAlgo(4),
        ratingStar:<FaStar/>,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        presentRating:ratingAlgo(4),
        ratingStar:<FaStar/>,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:2,
        presentRating: ratingAlgo(2),
        ratingStar:<FaStar/>,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:3,
        presentRating: ratingAlgo(5),
        ratingStar:<FaStar/>,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:4,
        presentRating: ratingAlgo(7),
        ratingStar:<FaStar/>,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        imgScr:'Ellipse 2.png',
        name:'Regina Miles',
        job:'Designer',
        rating:0,
        presentRating: ratingAlgo(0),
        ratingStar:<FaStar/>,
        description:'Slate helps you see how many more days you need to work to reach your financial goal.'
    }
    ]
    return (
        <>
            {testimonials.map(({imgScr, name, job, rating,description, ratingStar, presentRating}, index)=>(
                <div key={index} className={`${onTabletOrMobile?'w-70screen':''} monte bg-white py30 px35 bdr5 bd-g`}>
                    <div>
                        {/* {ratingStar}
                        <FaStar size='18' fill='#F3CD03' strokeWidth='30' stroke='#F3CD03'/>
                        <FaStar size='18'  stroke='#F3CD03' strokeWidth='30' fill='#FFFFFF'/>
                        {index}
                        {rating} */}
                        {presentRating}
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