import Link from 'next/link'

export default function SearchTags() {
    
    const tags=['All']
    // if(onTabletOrMobile){
    //     skills.push('Application/ Website Development')
    // }
    tags.push('Website', 'Graphics', 'Consulting','App dev', 'Research', 'Printing', 'Branding')
    return (
        <>
            {tags.map((tag, index) =>
                <span key={index} className='item'>
                    <Link href={'/'}>
                        <a>{tag}</a>
                    </Link>
                </span>
            )}
        </>
    )
}