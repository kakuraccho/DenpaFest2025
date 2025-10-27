import * as React from "react"
import Body from "../base/body"
import data from "../data/FoodsData.json"
import noimage from "../images/noimage.png"

const importAll = (r) => {
    let images = {}
    r.keys().map((item) => {
        images[item.replace('./', '')] = r(item)
        return item
    })
    return images
}

const foodsImages = importAll(require.context('../images/foods', false, /\.(jpe?g|png)$/))

const images = {}

Object.keys(foodsImages).forEach(key => {
    images[key] = foodsImages[key].default
})

images["noimage.png"] = noimage

console.log(images)

export default function Foods() {
    return (
        <Body>
            <div className="flex flex-col m-2">
                {data.map(food => (
                    <div key={food.id} className="border-2 rounded-md m-2 p-2">
                        <div className="flex flex-col">
                            <h2 className="text-3xl">{food.store}</h2>
                        </div>
                        <div className="flex flex-row mt-1">
                            <div className="flex flex-col aspect-square w-28 h-28 overflow-hidden flex-shrink-0 mr-2">
                                <img
                                    src={images[food.picture]}
                                    alt={food.store}
                                    className="w-full h-full object-cover rounded-md"
                                    />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl">{food.vendor}</h3>
                                <hr />
                                <p>{food.detail}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Body>
    )
}