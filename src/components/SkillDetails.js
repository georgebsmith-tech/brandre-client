import Link from "next/link";
export default function SkillDetails() {
  return (
    <div>
      <div className="relative w-screen">
        <img
          src="images/HomePage/icons/playvid.png"
          alt=""
          className="playbutton"
        />
        <img
          src="images/HomePage/Brandr hero 03 1 (1).png"
          alt="ss"
          className="max-w-full w-full"
        />
      </div>
      <div className="websitediv">
        <h5 className="text-blue">Light, Fast &amp; Powerful Websites</h5>
        <div>
          <p className="text-blue-500 webdesc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          {/* <Link href={'/'}> <a className='mt10 bold f18 ct py20 px24 bg-blue-200'>Get in touch</a></Link> */}
          <div className="webdesclink">
            <Link href="/projects">
              <a className="text-white bg-blue-200">See Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
// flex f14 space-between
