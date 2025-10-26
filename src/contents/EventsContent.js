import * as React from "react";
import eventsData from "../data/EventsData.json"
import noimage from "../images/noimage.png"
import PictureBooth from "../images/events/PictureBooth.jpg"
import Rest from "../images/events/Rest.jpg"
import Ghost from "../images/events/Ghost.jpg"
import GCS from "../images/events/GCS.jpg"
import SchoolSongs from "../images/events/SchoolSongs.jpg"
import Genshiken from "../images/events/Genshiken.png"
import Isec from "../images/events/Isec.png"
import Musen from "../images/events/Musen.jpg"
import Keion from "../images/events/Keion.jpg"
import Shodo from "../images/events/Shodo.jpg"
import BrassBand from "../images/events/BrassBand.jpg"

const images = {
    "noimage.png": noimage,
    "PictureBooth.jpg": PictureBooth,
    "Rest.jpg": Rest,
    "Ghost.jpg": Ghost,
    "GCS.jpg": GCS,
    "SchoolSongs.jpg": SchoolSongs,
    "Genshiken.png": Genshiken,
    "Isec.png": Isec,
    "Musen.jpg": Musen,
    "Keion.jpg": Keion,
    "Shodo.jpg": Shodo,
    "BrassBand.jpg": BrassBand,
}

export default function StoresContent() {

    return (
        <div className="flex flex-col m-2">
            {eventsData.map(event => (
                <div key={event.id} className="border-2 rounded-md m-2 p-2">
                    <div className="flex flex-col">
                        <h2 className="text-3xl">{event.event}</h2>
                    </div>
                    <div className="flex flex-row mt-1">
                        <div className="flex flex-col aspect-square w-28 h-28 overflow-hidden flex-shrink-0 mr-2">
                            <img
                                src={images[event.picture]}
                                alt={event.event}
                                className="w-full h-full object-cover rounded-md"
                                />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xl">{event.organizer}</h3>
                            <hr />
                            <p>{event.detail}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}