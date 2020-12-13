import React from 'react'
import kelsey from './me.png'

import '../Footer/Styles.scss'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <h1 className="footer__about">About</h1>
                <img className="footer__image"src={kelsey} alt="picture of kelsey" />
                <p>Developer in NYC with passion for front-end design and debugging</p>
                
            </div>
        </>
    )
}

export default Footer