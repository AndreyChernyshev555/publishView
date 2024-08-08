import React, { useState, useEffect } from "react";
import "./HomePage01.scss";
import FlyMenu from "./Components/FlyMenu/FlyMenu.jsx";
import ShadowBlock from "./Components/ShadowBlock.jsx";
import Offer from "./Components/Offer/Offer.jsx";
import Head from "./Components/Head/Head.jsx";
import Slider from "./Components/Slider/Slider.jsx";
import Description from "./Components/Description/Description.jsx";
import Collection from "./Components/Collection/Collection.jsx";
import NewArrivals from "./Components/NewArrivals/NewArrivals.jsx";
import Pros from "./Components/Pros/Pros.jsx";
import Info2 from "./Components/Info2.jsx";
import Articles from "./Components/Articles/Articles.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Footer from "./Components/Footer.jsx";
import rooms from "./img/rooms/rooms.js";
import newsletterBack from "./img/newsletter.png";
import furniture from "./img/furniture/furniture.js";

const itemInfo = [
    {
        path: furniture[0],
        rating: 5,
        title: "Loveseat Sofa",
        price: "$199.00",
        oldPrice: "$400.00",
        discount: "-50%",
    },
    {
        path: furniture[1],
        rating: 5,
        title: "Table Lamp",
        price: "$24.99",
        discount: "-50%",
    },
    {
        path: furniture[2],
        rating: 5,
        title: "Loveseat Sofa",
        price: "$24.00",
        discount: "-50%",
    },
    {
        path: furniture[3],
        rating: 5,
        title: "Bamboo Basket",
        price: "$10.50",
        discount: "-50%",
    },
    {
        path: furniture[4],
        rating: 5,
        title: "Toaster",
        price: "$249.25",
        oldPrice: "$400.00",
        discount: "-50%",
    },
];

const goodsInfo = [
    { title: "Living Room", img: rooms[2], top: "7%", left: "8.6%" },
    { title: "Bedroom", img: rooms[0] },
    { title: "Kitchen", img: rooms[1] },
];
const collOffering = "Shop Now";

export default function HomePage01(props) {
    const [flyMenu, setFlyMenu] = useState(-1.2);
    const showFlyMenu = () => {
        setFlyMenu(0);
    };
    const hideFlyMenu = () => {
        setFlyMenu(-1.2);
    };
    useEffect(() => {
      document.body.style.overflow = (flyMenu === 0 ? "hidden" : "visible");
    });
    return (
        <div>
            <FlyMenu displayParam={flyMenu} hideClick={hideFlyMenu} />
            <ShadowBlock displayParam={flyMenu}/>
            <Offer offerText={"30% off storewide — Limited time!"} />
            <Head
                headStyle={{
                    backgroundColor: "white",
                    color: "#6c7275",
                }}
                showClick={showFlyMenu}
            />
            <div className="page">
                <Slider />
                <Description />
                <Collection goods={goodsInfo} collOffer={collOffering} />
                <NewArrivals
                    itemList={itemInfo}
                    wrap="no-wrap"
                    header="New arrivals"
                />
                <Pros />
                <Info2 />
                <Articles />
                <Newsletter background={newsletterBack} />
                <Footer />
            </div>
        </div>
    );
}
