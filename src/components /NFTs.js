import { ReactComponent as MbToken} from "../assets/mbToken.svg";
import { ReactComponent as Metamask } from "../assets/metamask.svg";
import { ReactComponent as Opensea } from "../assets/opensea.svg";

const NFTs = () => {
    return (
        <section className="w-[100vw] bg-purple">
        <div className="flex w-[80vw] m-auto justify-between items-center mt-12">
          <MbToken className="w-24 sm:w-28 lg:w-32" />
          <Metamask className="w-24 sm:w-28 lg:w-32" />
          <Opensea className="w-24 sm:w-28 lg:w-32" />
        </div>
      </section>
    )
}

export default NFTs;