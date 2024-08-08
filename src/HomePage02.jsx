import React, { useState, useEffect } from "react";
import "./HomePage02.scss";
import FlyMenu from "./Components/FlyMenu/FlyMenu.jsx";
import Offer from "./Components/Offer/Offer.jsx";
import Head from "./Components/Head/Head.jsx";
import Promo from "./Components/Promo/Promo.jsx";
import Logos from "./Components/Logos.jsx";
import Footer from "./Components/Footer.jsx";
import NewArrivals from "./Components/NewArrivals/NewArrivals.jsx";
import Collection from "./Components/Collection/Collection.jsx";
import TimePromo from "./Components/TimePromo/TimePromo.jsx";
import Pros from "./Components/Pros/Pros.jsx";
import Newsfeed from "./Components/Newsfeed/Newsfeed.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import newsletterBack from "./img/newsletter2.svg";
import headColl from "./img/headphones_collection/headColl.js";
import headphones from "./img/headphones/headphones.js";

const itemInfo = [
    {
        path: headphones[0],
        rating: 5,
        title: "Skullcandy - Crusher anc 2 wireless headphones",
        price: "$299.99",
    },
    {
        path: headphones[1],
        rating: 5,
        title: "Beats Studio Pro",
        price: "$349.99",
    },
    {
        path: headphones[2],
        rating: 5,
        title: "Sony - WH-CH720N Wireless Noise Canceling",
        price: "$149.99",
    },
    {
        path: headphones[3],
        rating: 5,
        title: "Skullcandy - Rail True Wireless Earbuds",
        price: "$79.99",
    },
    {
        path: headphones[4],
        rating: 5,
        title: "Beats Studio Pro",
        price: "$224.99",
    },
    {
        path: headphones[5],
        rating: 5,
        title: "JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports",
        price: "$179.95",
    },
    {
        path: headphones[6],
        rating: 5,
        title: "Bose QuietComfort Headphones",
        price: "$349.00",
    },
    {
        path: headphones[7],
        rating: 5,
        title: "AKG Y600NC Wireless",
        price: "$349.99",
    },
];

const goodsInfo = [
    {
        title: "Headband",
        img: headColl[0],
        top: "77.7%",
        left: "8.6%",
    },
    { title: "Earbuds", img: headColl[1] },
    {
        title: "Accessories",
        img: headColl[2],
    },
];
const collOffering = "Collection →";

// .head {
//     background-color: $main-head-color;
//     color: $head-font-color;
//   }
//   .head_section {
//     transition: color, 0.2s;
//     &:hover {
//       color: $font-color;
//     }
//   }
//   .head_button {
//     transition: filter, 0.2s;
//     &:hover {
//       filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(240deg)
//         brightness(105%) contrast(103%);
//     }
//   }
//   .head_indicator {
//     background-color: #141718;
//     color: $font-color;
//   }

export default function HomePage02(props) {
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
            <FlyMenu 
                displayParam={flyMenu}
                hideClick={hideFlyMenu}
            />
            <Offer
                offerText={"30% off storewide — Limited time!"}
                offerColors={{ background: "#141718", color: "#f3f5f7" }}
                offerImg={{
                    filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(240deg) brightness(105%) contrast(103%)",
                }}
                offerLink={{ color: "rgba(255, 171, 0, 0.64" }}
            />
            <Head
                homePageFunc={props.setFunc}
                headStyle={{
                    backgroundColor: "#FFC95C",
                    color: "#141718",
                }}
                showClick={showFlyMenu}
            />
            <Promo />
            <div className="page">
                <Logos />
                <NewArrivals
                    itemList={itemInfo.slice(0, 5)}
                    wrap="no-wrap"
                    header="New Arrivals"
                />
                <div className="page-header">Shop Collection</div>
                <Collection goods={goodsInfo} collOffer={collOffering} />
                <NewArrivals
                    itemList={itemInfo}
                    wrap="wrap"
                    header="Bestseller"
                    overflow="hidden"
                    type="gridable"
                />
                <TimePromo />
                <Pros />
                <Newsfeed />
                <Newsletter background={newsletterBack} />
            </div>
            <Footer />
        </div>
    );
}
