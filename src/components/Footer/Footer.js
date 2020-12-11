import React from 'react'
import kelsey from './me.png'

import '../Footer/Styles.scss'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <h1>About</h1>
                <img className="footer__image"src={kelsey} alt="picture of kelsey" />
                
            </div>
        </>
    )
}

export default Footer