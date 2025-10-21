import * as React from "react";
import Body from "../base/body";

import day1 from "../images/timetable/1stday.jpg"
import day2 from "../images/timetable/2ndday.jpg"

export default function TimeTable() {
    
    return (
        <Body>
            <div className="flex flex-col">
                <img
                    src={day1}
                    alt="first day"
                    className=""
                />
                <img
                    src={day2}
                    alt=""
                    className=""
                />
            </div>
        </Body>
    )
}