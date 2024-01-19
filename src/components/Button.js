import React from 'react'
import "./Button.css"
const Button = (props) => {

    return (
        <>
            <div className=" d-flex align-items-center ">
                <a href={props.link} target={props.new ? "_blank" : "_self" } className={props.cls == "btn--outline" ? "p-btn btn--outline" : "p-btn btn-dark"}>
                {props.text}
                </a>
                    {/* <button className={props.cls == "btn--outline" ? "p-btn btn--outline" : "p-btn btn-dark"}>{props.text}</button> */}
            </div>
        </>
    )
}

export default Button
