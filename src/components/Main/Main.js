import React from "react"
import Hello from './Hello.js'


 import './Styles.scss';



const Main = (props) => {

    return (
        <>
        <div className="top">
            <h1>Kelsey Dickson</h1>
        </div>
       <h1 className="top__poop">Hi {props.name}</h1>
    <Hello />
        </>
    )
}

export default Main