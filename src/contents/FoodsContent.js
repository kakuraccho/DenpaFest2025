import * as React from "react";
import foodsData from "../data/FoodsData.json"
import takoyaki from "../images/foods/takoyaki.jpg"
import okonomiyaki from "../images/foods/okonomiyaki.jpg"

const images = {
    "takoyaki.jpg": takoyaki,
    "okonomiyaki.jpg": okonomiyaki
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