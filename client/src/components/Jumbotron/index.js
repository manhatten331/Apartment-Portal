import React from "react";
import "./style.css"


export function Jumpotron ({children}) {
    return (
        <div style={{ marginTop: 30, clear: "both",
        backgroundColor: "#707070"}}

        id="Jumpo"

        className="jumbotron jumbotron-fluid text-center"
        >
            <h1 className="display-4">{children}</h1>
        </div>
    )
}
