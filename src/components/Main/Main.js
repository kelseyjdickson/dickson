import React from "react"
import twitter from "./twit.png"



import './Styles.scss';


const Main = (props) => {

    return (
        <>
            <div className="top">
                <h1>Kelsey Dickson</h1>
                <a href="https://twitter.com/KelseyD485">
                    <img className="twitter" src={twitter} alt="twitter-logo" />
                </a>

            </div>

        </>
    )
}

export default Main