import {ReactComponent as Star } from "../assets/star.svg";

const PlacesCards = () => {
const cards = [
    {
      image: require("../assets/dvn1.png"),
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2 weeks stay"
    },
    {
      image: require("../assets/s5.png"),
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2 weeks stay"
    },
    {
      image: require("../assets/s16.png"),
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2 weeks stay"
    },
    {
      image: require("../assets/s11.png"),
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2 weeks stay"
    },
    {
      image: require("../assets/druids6.png"),
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2 weeks stay"
    },
    {
      image: require("../assets/aise.png"),
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2 weeks stay"
    },
    {
      image: require("../assets/s1.png"),
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2 weeks stay"
    },
    {
      image: require("../assets/aise1.png"),
      name: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2 weeks stay"
    },
    {
        image: require("../assets/s20.png"),
        name: "Desert King",
        price: "1MBT per night",
        distance: "2345km away",
        duration: "available for 2 weeks stay"
    },
    {
        image: require("../assets/s21.png"),
        name: "Desert King",
        price: "1MBT per night",
        distance: "2345km away",
        duration: "available for 2 weeks stay"
    },
    {
        image: require("../assets/s22.png"),
        name: "Desert King",
        price: "1MBT per night",
        distance: "2345km away",
        duration: "available for 2 weeks stay"
    },
    {
        image: require("../assets/s23.png"),
        name: "Desert King",
        price: "1MBT per night",
        distance: "2345km away",
        duration: "available for 2 weeks stay"
    },
    {
        image: require("../assets/s24.png"),
        name: "Desert King",
        price: "1MBT per night",
        distance: "2345km away",
        duration: "available for 2 weeks stay"
    },
    {
        image: require("../assets/s25.png"),
        name: "Desert King",
        price: "1MBT per night",
        distance: "2345km away",
        duration: "available for 2 weeks stay"
    },
    {
        image: require("../assets/s26.png"),
        name: "Desert King",
        price: "1MBT per night",
        distance: "2345km away",
        duration: "available for 2 weeks stay"
    },
    {
        image: require("../assets/s27.png"),
        name: "Desert King",
        price: "1MBT per night",
        distance: "2345km away",
        duration: "available for 2 weeks stay"
    }
];
  return (
    <section className="mt-5 mb-12 w-[85vw] m-auto">
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        return (
          <article key={index} className="h-[372px] w-[292px] border border-borderColor rounded-2xl text-xs">
            <div className="w-[90%] m-auto mt-2">
              <img src={card.image} alt="meta cards"/>
              <div className="flex justify-between mt-3 mb-2">
                <p className="">{card.name}</p>
                <span className="font-bold text-priceColor">{card.price}</span>
              </div>
              <div className="flex justify-between">
                <p>{card.distance}</p>
                <p>{card.duration}</p>
              </div>
              <div className="flex gap-2 mt-2">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
              </div>
            </div>
          </article>
        )
      })}
      </div>
    </section>
  )
}

export default PlacesCards;