import Link from 'next/link'
export default function Welcome() {
    return (
        <div className='x-hidden relative'>
            <div className='absolute x-sides-0 y-sides-0 top5 z-most ml20'>
                <h2 className='bold ptserif text-red lh80 f84 d'>Be Found Online!</h2>
                <h2 className='bold ptserif text-red lh80 f84 d'>Its simple!</h2>
                <p className='f24 inter ml-5 mt35 bold500 text-white lh32'>With our expertise, we fuel your social media and create apps that promote engaging experience for your business.</p>
            </div>
            <div className='w-screen max-w-full x-hidden cliptop'>
                <img src="images/HomePage/Brandr hero 01 1.png" alt="" className='max-w-full max-h-full'/>
            </div>
        </div>
    )
}
// flex f14 space-between