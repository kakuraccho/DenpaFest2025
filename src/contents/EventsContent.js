import * as React from "react";
import eventsData from "../data/EventsData.json"
import karaoke from "../images/events/karaoke.jpg"
import girlscontest from "../images/events/girlscontest.jpg"

const images = {
    "karaoke.jpg": karaoke,
    "girlscontest.jpg": girlscontest
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