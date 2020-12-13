import React from "react"
import twitter from './src/images/twit.png'



 import './Styles.scss';


const Main = (props) => {

    return (
        <>
        <div className="top">
            <h1>Kelsey Dickson</h1>
            <img src={twitter}alt="twitter-logo"/>
        </div>
   
        </>
    )
}

export default Main