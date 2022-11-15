import susan from "../assets/susan.png";
import s9 from "../assets/s9.png";
import s2 from "../assets/s2.png";
import druids from "../assets/druids.png";

const MetaVerse = () => {
  return (
    <section className="grid justify-center lg:flex lg:justify-between w-[85vw] lg:h-[460px] m-auto pt-24 gap-16">
      <div>
        <h1 className="text-4xl w-[40vw]">Rent a <span className="text-purple font-bold">Place</span> away from <span className="text-purple font-bold">Home </span>in the <span className="text-purple font-bold">Metaverse</span></h1>
        <p className="text-black pt-20 w-[40vw]">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <div className="pt-20 flex">
          <input type="search" name="search" placeholder="Search for location" className="h-10 border border-solid border-borderColor pl-3 rounded-l-lg"/>
          <button className="w-16 h-10 sm:w-32 rounded-r-lg text-white bg-purple">Search</button>
        </div>
      </div>
      <div className="flex h-[345px] max-w-[385px]">
        <div className="self-end">
          <img src={susan} alt="Susan"/>
          <img src={s9} alt="Susan"/>
        </div>
        <div>
          <img src={s2} alt="Susan"/>
          <img src={druids} alt="Susan"/>
          </div>
      </div>
    </section>
  )
}

export default MetaVerse;