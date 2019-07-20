import React from "react";

export function Container({children}) {
    return <div className="container-fluid">{children}</div>
}

export function Row({children}) {
    return <div className="row">{children}</div>
}

export function Col (props) {
    return <div {...props}>{props.children}</div>
}