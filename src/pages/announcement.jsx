import * as React from "react";
import { createClient } from "microcms-js-sdk";
import Body from '../base/body'
import ComingSoon from '../contents/ComingSoon'

const client = createClient({
    serviceDomain: "denpafest2025",
    apiKey: "Wi7JMEJDILPx70ksylneMicsHFoZYRIwEyP4",
})

export default function Announcement() {
    return (
        <Body>
            <ComingSoon />
        </Body>
    )
}