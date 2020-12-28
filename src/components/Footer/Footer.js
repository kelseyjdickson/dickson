import React from 'react'
import kelsey from './me.png'
import kel from './kel.jpeg'
import ballet from './ballet.png'
import '../Footer/Styles.scss'


const Footer = () => {
    return (
        <>
  
            <div className="footer">
                
                <img className="footer__image"src={ballet} alt="profile of kelsey" />
                <p className="footer__info">Developer in NYC with passion for front-end design and debugging. A forever student who loves to have growth opportunites.</p>
                <div className="resume-right">
                    <a className="res-link"href="https://github.com/kelseyjdickson/resume/raw/main/kjdicksonfinal2020.pdf" >Resume</a>
                </div>
                
                <div className="footer__icon-container">
                    <a href="https://twitter.com/KelseyD485">
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