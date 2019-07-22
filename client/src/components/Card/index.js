import React from "react";

export function CardTitle({ children }) {
    return (
        <div className="card text-center">
            <div style={{backgroundColor: "#383838", color: "white"}}
            
            className="card-body">
                <div className="card-title">{children}</div>
            </div>
        </div>
    )
}

export function CardBody({ children }) {
    return (
        // <div className="card text-center">
        // <div className="card-body">
            <p className="card-text">{children}</p>
        /* </div> */
        /* </div> */
    )
}

export function CardButton(props) {
    return (
        <a {...props} className="btn btn-success">{props.children}</a>
    )
}

// export function Card (props) {
//     return (
//         <div className="card text-center">
//             <div className="card-body">
//                 {/* card title */}
//                 {/* <div className="card-title">{props.children}</div> */}
//                 <p className="card-text">{props.children}</p>
//                 <a {...props} className="btn btn-primary">{props.children}</a>
//             </div>
//         </div>
//     )
// }
