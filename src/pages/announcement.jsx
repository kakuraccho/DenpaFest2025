import * as React from "react";
import { createClient } from "microcms-js-sdk";
import Body from '../base/body'

const client = createClient({
    serviceDomain: "denpafest2025",
    apiKey: "Wi7JMEJDILPx70ksylneMicsHFoZYRIwEyP4",
})

export default function Announcement() {

    client
        .get({
            endpoint: "news",
        })
        .then((res) => console.log(res))
    return (
        <Body>
            
        </Body>
    )
}