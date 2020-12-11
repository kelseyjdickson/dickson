import React from 'react'
import kelsey from './images/me.png'

import '../Footer/Styles.scss'


const Footer = () => {
    return(
        <>
        <h1 className="footer">Footer</h1>
        <img src={kelsey} alt="picture of kelsey"/>
        </>
    )
}

export default Footer