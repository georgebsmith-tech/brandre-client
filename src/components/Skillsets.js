import Link from 'next/link'
export default function Skillsets() {
    const skills=[
        'Branding and Graphics design',
        'Consultation and Business Dev',
        'Digital Marketing/ Advertising'
    ]
    return (
        <>
            {skills.forEach(skill=>{
                {console.log(skill)}
                <div key={skill}>
                    <p>ddwdwddwjdwdw</p>
                    <p>{skill}ssssa</p>
                    <Link href={'/'}>sssmiwdjwdjjwiddjwdiddds,</Link>
                </div>
})}
            <p>kdndnnsd</p>
        </>               
        
    )
}