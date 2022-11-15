import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import MetaVerse from "./Metaverse";
import MetaBnB from "./MetaBnB";
import NFTs from "./NFTs";

const Home = ({ dimension }) => {
    return (
        <main>
            <Header dimension={dimension}/>
            <MetaVerse />
            <NFTs />
            <Cards />
            <MetaBnB />
            <Footer />
      </main>
    )
}

export default Home