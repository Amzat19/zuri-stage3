import Header from "./Header";
import Footer from "./Footer";
import Places from "./Places";
import PlacesCards from "./PlacesCards";

const PlaceToStay = ({ dimension }) => {
    return (
        <main>
            <Header dimension={dimension}/>
            <Places />
            <PlacesCards />
            <Footer />
        </main>
    )
}

export default PlaceToStay