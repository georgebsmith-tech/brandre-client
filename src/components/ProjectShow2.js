import {useState, useEffect, useRef} from 'react'
import  ReactDOM  from 'react-dom'

import Link from 'next/link'
// import {createPortal} from 'react-dom'

function ProjectShow({shown, closeIt}){
    console.log('render')
    const [isBrowser, setIsBrowser]= useState(false)
    const here=(e)=>{
        console.log('yes')
        e.preventDefault()
    }
    const handleClick=(e)=>{
        e.preventDefault();
        closeIt()
    }

    useEffect(()=>{
        setIsBrowser(true)
    }, [])
    const modalc=shown?(
        <div className='modalbg bg-blue' style={{}}>
         {/* <div className='relative block bg-red'> */}
        
        
            {/* </div> */}
            {/* <button>yesjsbsbsuswdu</button> */}
            <img src="./images/ProjectPage/icons/close.png"  className='windowclose' alt="" />
            <a href='#' onClick={handleClick}>xggdywdgywdgwyddd</a>
                
                
            
        </div>
        
    ):null;
    if(isBrowser){
        return ReactDOM.createPortal(
            modalc,document.getElementById("modal-root")
        );
    }else{
        return null;
    }
    console.log(onClose)
    // <img src="./images/ProjectPage/icons/close.png"  className='windowclose' onClick={onClose} alt="" />
    const projContent=show?(
        <div className='modalbg' style={{}}>
            <div className='showcontainer'>
                {/* <div className='relative block bg-red'> */}
            
            
                {/* </div> */}
                <button onClick={onCloses}>yesjsbsbsuswdu</button>
                <img src="./images/ProjectPage/icons/close.png"  className='windowclose' onClick={onClose} alt="" />
                <div className='projectdiv'>
                    <div className='arrow'>
                        <img src="./images/ProjectPage/icons/arrowleft.png" alt="" onClick={here}/>
                    </div>
                    <div className='aboutproj'>
                        <div className='relative height1016 grid grid3'>
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
                        </div>
                    </div>
                    
                    <div className='arrow'>
                        <img src="./images/ProjectPage/icons/arrowright.png" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
        
    ):null;

}
// export function ProjectShowMe({show, onClose}){
//     // if (!show) return null
//     return createPortal(
//         <ProjectShowMe/>
//         ,document.getElementById('portal')
//     )
// }
export default ProjectShow