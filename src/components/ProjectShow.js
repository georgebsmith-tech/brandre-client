import React from 'react'
import {FaWindowClose } from 'react-icons/fa';
import { Skillset } from './Skillset'
import Link from 'next/link'
import {createPortal} from 'react-dom'


// export function ProjectShow({show, onClose}){
//     if (!show) return null
//     return createPortal(
//         document.getElementById('portal')
//     )
// }
export function ProjectShow(){
    <div className='showcontainer'>
        <button className='window'>
            <FaWindowClose/>
        </button>
        <div className='projectdiv gridrepeat108010'>
            <div>
                <img src="./images/ProjectPage/icons/arrowleft.png" alt="" />
            </div>
            <div className='aboutproject marginx'>
                <div className='relative height1016'>
                    <div className='absolute'>
                        <img src="./images/ProjectPage/Rectangle 19.png" alt="" />
                        <div className='absolute'>
                            <h2>Lorem ipsum dolor sit amet</h2>
                        </div>
                    </div>
                    <div className='grid'>
                        <img src="./images/ProjectPage/Rectangle 19.png" alt="w331vh420" />
                        <div className=''>
                            <img src="./images/ProjectPage/Rectangle 19.png" alt="w213vh418" />
                            <img src="./images/ProjectPage/Rectangle 19.png" alt="w239vh418" />
                        </div>
                    </div>
                </div>
                <div className='writeup'>
                    <h2>LOREM <span>IPSUM</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                </div>
                <div className='thosepink grid'>
                    <div>
                        <div>
                            <img src="./images/ProjectPage/Rectangle 14.png" alt="" />
                        </div>
                        <div>
                            <div>
                                <img src="./images/ProjectPage/Rectangle 16.png" alt="" />
                            </div>
                            <div>
                                <img src="./images/ProjectPage/Rectangle 15.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>Projects</h5>
                        <div>
                            <img src="./images/ProjectPage/Rectangle 12.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt aliquip ex ea commodo consequat. Duis aute irure dolor in cupidatat laboris commodo consequat.</p>
                </div>
                <div className='grid'>
                    <div>
                        <div>
                            <h5>Yuridik shaxslar uchun</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat venenatis nibh porttitor sem ante. Auctor tincidunt ultricies tortor felis commodo sed at. Faucibus purus purus diam quis aliquet libero parturient sed. </p>
                        </div>
                        <div className='grid iconnmtext'>
                            <div className='flex'>
                                <img src="" alt="" />
                                <div className=''>
                                    <h6>Lorem Ipsum</h6>
                                    <p>uctor tincidunt ultricies tortor felis commodo sed at</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <img src="" alt="" />
                                <div className=''>
                                    <h6>Lorem Ipsum</h6>
                                    <p>uctor tincidunt ultricies tortor felis commodo sed at</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <img src="" alt="" />
                                <div className=''>
                                    <h6>Lorem Ipsum</h6>
                                    <p>uctor tincidunt ultricies tortor felis commodo sed at</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <img src="" alt="" />
                                <div className=''>
                                    <h6>Lorem Ipsum</h6>
                                    <p>uctor tincidunt ultricies tortor felis commodo sed at</p>
                                </div>
                            </div>
                        </div>
                        <Link href={'/'}>
                            <a>Share Project</a>
                        </Link>
                    </div>
                    <div>
                        <img src="./images/ProjectPage/image 3.png" alt="" />  
                        
                    </div>

                </div>

            </div>
            <img src="./images/ProjectPage/icons/arrowright.png" alt="" />
        </div>
    </div>
}