import Link from 'next/link'
import {FaSearch} from 'react-icons/fa'
import Footer from '../components/Footer'

import Nav from '../components/Nav'
import Project from '../components/Project'
import SearchTags from '../components/SearchTags'
import Welcome from '../components/Welcome'

function Projects(){
  return(
    <div className='x-hidden'>
        <Nav/>
        <Welcome/>
        <div>
          <h4>Find a Project</h4>
          <input type="text" placeholder='Search'/>
          <FaSearch/>
        </div>
        <div>
          <p>Search Tags</p>
          <span>
            <SearchTags/>
          </span>
        </div>
        <div className='projectgrid'>
          <Project/>
        </div>
        <Link href={'/'}>
          <a>Load More Projects</a>
        </Link>
        <Footer/>
    </div>
    )
}

export default Projects