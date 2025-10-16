import * as React from "react"
import Body from "../components/body"
import PrincipalMessage from "../contents/MessagePrincipal"
import CommitteeMessage from "../contents/MessageCommittee"

export default function Messages() {
    return (
        <Body>
            <PrincipalMessage />
            <CommitteeMessage />
        </Body>
    )
}