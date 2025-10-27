import * as React from "react"
import Body from "../base/body"
import data from "../data/EventsData.json"
import noimage from "../images/noimage.png"

const importAll = (r) => {
    let images = {}
    r.keys().map((item) => {
        images[item.replace('./', '')] = r(item)
        return item
    })
    return images
}

const eventImages = importAll(require.context('../images/events', false, /\.(jpe?g|png)$/))

const images = {}

Object.keys(eventImages).forEach(key => {
    images[key] = eventImages[key].default
})

images["noimage.png"] = noimage

console.log(images)

export default function Events() {
    return (
        <Body>
            <div className="flex flex-col m-2">
                {data.map(event => (
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
        </Body>
    )
}