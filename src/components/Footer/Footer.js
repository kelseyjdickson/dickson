import React from 'react'
import kelsey from './me.png'


import '../Footer/Styles.scss'


const Footer = () => {
    return (
        <>

            <div className="footer">

                <img className="footer__image" src={kelsey} alt="profile of kelsey" />
                <div className="info">

                    <p className="footer__info">Developer in NYC with passion for front-end design and debugging. Views challenges as an opportunity for growth. Loves to collaborate with others and share success.</p>
                </div>

                <div className="footer__icon-container">
                <div className="resume-right">
                    <a className="res-link" href="https://github.com/kelseyjdickson/resume/raw/main/Dickson2021.pdf" >Resume</a>
                </div>
                <p>Let's Connect:</p><a href="https://twitter.com/KelseyD485">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <a href="https://github.com/kelseyjdickson">
                        <i class="fab fa-github-square fa-2x"></i>
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