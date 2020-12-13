import React from "react"




import './Styles.scss';


const Main = (props) => {

    return (
        <>
            <div className="top">
                <h1>Kelsey Dickson</h1>
                <div className="icon-container">
                    <a href="https://twitter.com/KelseyD485">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/feed/">
                        <i className="link" class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://kelseyjdickson.medium.com/">
                        <i class="fab fa-medium fa-2x"></i>
                    </a>
                </div>

            </div>

        </>
    )
}

export default Main