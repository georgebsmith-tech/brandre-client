import Link from 'next/link'
// import {useState} from 'react'
import Summary from './Summary';

export default function ProjectShow({show,closeIt}) {
    console.log(show)
    // const [showProject,setShowProject]=useState(false)
    const handleClick=(e)=>{
        e.preventDefault();
        closeIt()
    }
    if(!show) return null
    return (
        <div className='modalbg' style={{}}>
            <div className='showcontainer'>
                {/* <div className='relative block bg-red'> */}
            
            
                {/* </div> */}
                <img src="./images/ProjectPage/icons/close.png"  className='windowclose pointer' alt="" onClick={handleClick} />
                <div className='projectdiv'>
                    <div className='arrow'>
                        <img src="./images/ProjectPage/icons/arrowleft.png" alt=""/>
                    </div>
                    <div className='aboutproj'>
                        <div className='relative w-full'>
                            <div className='relative projsample1'>
                                <img src="./images/ProjectPage/Rectangle 19.png" alt="" />
                                <div className=''>
                                    <h2>Lorem ipsum dolor sit amet</h2>
                                </div>
                            </div>
                            <div className='groupsample'>
                                <img src="./images/ProjectPage/Rectangle 21.png" alt="w331vh420" className='imagesolo'/>
                                <div className='sample3'>
                                    <img src="./images/ProjectPage/Rectangle 19.png" alt="w213vh418" />
                                    <img src="./images/ProjectPage/Rectangle 22 (1).png" alt="w239vh418" />
                                </div>
                            </div>
                        </div>
                        <div className='projdetails'>
                            <h2>lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                        </div>
                        <div className='samplefinal'>
                            <div className='s3group'>
                                <img src="./images/ProjectPage/Rectangle 14.png" alt="" />
                                <div className='s3groupgroup'>
                                    <img src="./images/ProjectPage/Rectangle 15.png" alt="" />
                                    <img src="./images/ProjectPage/Rectangle 15.png" alt="" />
                                </div>
                            </div>
                            <div className='s3group2'>
                                <h2>Projects</h2>
                                <img src="./images/ProjectPage/Rectangle 12.png" alt="" />
                            </div>
                        </div>
                        <div className='projdetails2'>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                        </div>
                        <div className='finaldetails'>
                           <div className='finalwords'>
                                <div className='summary'>
                                    <h5>Yuridik shaxslar uchun</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat venenatis nibh porttitor sem ante. Auctor tincidunt ultricies tortor felis commodo sed at. Faucibus purus purus diam quis aliquet libero parturient sed. </p>
                                </div>
                                <div className='summgrid'>
                                    <Summary/>
                                </div>
                            </div>
                            <img src="./images/ProjectPage/image 3.png" alt="" className='soloimg'/>
                        </div> 
                        <Link href={"#"}>
                            <a href="" className='showproj'>Show project</a>
                        </Link>
                        {/* <div className='projdetails'>
                            <h2>lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                        </div>
                        <div className='samplefinal'>
                            <div className='s3group'>
                                <img src="./images/ProjectPage/Rectangle 14.png" alt="" />
                                <div className='s3groupgroup'>
                                    <img src="./images/ProjectPage/Rectangle 15.png" alt="" />
                                    <img src="./images/ProjectPage/Rectangle 15.png" alt="" />
                                </div>
                            </div>
                            <div className='s3group2'>
                                <h2>Projects</h2>
                                <img src="./images/ProjectPage/Rectangle 12.png" alt="" />
                            </div>
                        </div>
                        <div className='projdetails2'>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                        </div>

                        <div className='finaldetails'>
                           <div className='finalwords'>
                                <div className='summary'>
                                    <h5>Yuridik shaxslar uchun</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat venenatis nibh porttitor sem ante. Auctor tincidunt ultricies tortor felis commodo sed at. Faucibus purus purus diam quis aliquet libero parturient sed. </p>
                                </div>
                                <div className='summgrid'>
                                    <Summary/>
                                </div>
                                <Link href={"#"}>
                                    <a href="" className='showproj'>Show project</a>
                                </Link>
                            </div>
                            <img src="./images/ProjectPage/image 3.png" alt="" />
                        </div> */}
                    </div>
                    <div className='arrow'>
                        <img src="./images/ProjectPage/icons/arrowright.png" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
// flex f14 space-between
{/* <div className='relative height1016 grid grid3'>
<div className='absolut'>
    <img src="./images/ProjectPage/Rectangle 19.png" alt="" />
    <div className='absolut'>
        <h2>Lorem ipsum dolor sit amet</h2>
    </div>
</div>
<div className='grid grid3'>
    <img src="./images/ProjectPage/Rectangle 19.png" alt="w331vh420" />
    <div className=''>
        <img src="./images/ProjectPage/Rectangle 19.png" alt="w213vh418" />
        <img src="./images/ProjectPage/Rectangle 19.png" alt="w239vh418" />
    </div>
</div>
</div> */}