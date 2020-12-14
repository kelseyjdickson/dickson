import React from 'react'
import kelsey from './me.png'

import '../Footer/Styles.scss'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <h1 className="footer__about">About</h1>
                <img className="footer__image"src={kelsey} alt="picture of kelsey" />
                <div className="footer__info">Developer in NYC with passion for front-end design and debugging</div>
                <div className="footer__icon-container">
                    <a href="https://twitter.com/KelseyD485">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/feed/">
                        <i className="link" class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://kelseyjdickson.medium.com/">
                        <i class="fab fa-medium fa-2x"></i>
                    </a>
                    <a href="mailto: kelseymedved@gmail.com">
                    <i class="fas fa-envelope-square fa-2x"></i>
                    </a>
                </div>
                
            </div>
        </>
    )
}

export default Footer