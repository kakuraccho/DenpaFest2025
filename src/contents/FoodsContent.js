import * as React from "react";
import foodsData from "../data/FoodsData.json"
import ES2 from "../images/foods/ES2.png"
import IT2 from "../images/foods/IT2.png"
import CN3 from "../images/foods/CN3.jpg"
import ES3 from "../images/foods/ES3.png"
import IT3 from "../images/foods/IT3.jpg"
import YaeBurger from "../images/foods/YaeBurger.jpg"
import Takahashi from "../images/foods/Takahashi.jpg"
import JapaneseCafe from "../images/foods/JapaneseCafe.jpg"
import BBasket from "../images/foods/BBasket.jpg"
import HiyashiChuka from "../images/foods/HiyashiChuka.jpg"
import GBasket from "../images/foods/GBasket.png"
import Shorinji from "../images/foods/Shorinji.jpg"
import MILab from "../images/foods/MILab.png"
import BVolley from "../images/foods/BVolley.jpg"
import Soccer from "../images/foods/Soccer.jpg"
import OnoKen from "../images/foods/OnoKen.jpg"

const images = {
    "ES2.png": ES2,
    "IT2.png": IT2,
    "CN3.jpg": CN3,
    "ES3.png": ES3,
    "IT3.jpg": IT3,
    "YaeBurger.jpg": YaeBurger,
    "Takahashi.jpg": Takahashi,
    "JapaneseCafe.jpg": JapaneseCafe,
    "BBasket.jpg": BBasket,
    "HiyashiChuka.jpg": HiyashiChuka,
    "GBasket.png": GBasket,
    "Shorinji.jpg": Shorinji,
    "MILab.png": MILab,
    "BVolley.jpg": BVolley,
    "Soccer.jpg": Soccer,
    "OnoKen.jpg": OnoKen,
}

export default function StoresContent() {

    return (
        <div className="flex flex-col m-2">
            {foodsData.map(vendor => (
                <div key={vendor.id} className="border-2 rounded-md m-2 p-2">
                    <div className="flex flex-col">
                        <h2 className="text-3xl">{vendor.store}</h2>
                    </div>
                    <div className="flex flex-row mt-1">
                        <div className="flex flex-col aspect-square w-28 h-28 overflow-hidden flex-shrink-0 mr-2">
                            <img
                                src={images[vendor.picture]}
                                alt={vendor.name}
                                className="w-full h-full object-cover rounded-md"
                                />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xl">{vendor.vendor}</h3>
                            <hr />
                            <p>{vendor.detail}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}