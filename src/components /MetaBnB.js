import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import susan4 from "../assets/susan4.png";

const MetaBnB = () => {
  return (
    <section className="bg-purple mt-10">
      <div className="w-[85vw] m-auto pt-10 grid laptop:flex laptop:justify-between laptop:items-center">
        <div className="justify-self-center">
          <span className="font-bold text-5xl text-white">Metabnb NFTs</span>
          <p className="text-white w-80 mt-8">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          <button className="text-purple bg-white rounded-lg w-40 mt-8">Learn More</button>
        </div>
        <div className="grid pt-5 pb-5 sm:relative sm:w-[532px] min-h-[650px] justify-self-center">
          <img className="sm:absolute sm:top-10 sm:left-24" src={s3} alt="s3"/>
          <img className="sm:absolute sm:bottom-20 sm:right-40" src={s4} alt="s4"/>
          <img className="sm:absolute sm:bottom-20 sm:left-40" src={susan4} alt="susan4"/>
        </div>
      </div>
    </section>
  )
}

export default MetaBnB;