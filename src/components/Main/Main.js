import React from "react"
import Hello from './Hello.js'


 import './Styles.scss';



const Main = (props) => {

    return (
        <>
       <h1 className="poop">Hi {props.name}</h1>
    <Hello />
        </>
    )
}

export default Main