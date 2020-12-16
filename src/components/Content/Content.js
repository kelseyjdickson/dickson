import React from "react"
import stumptown from './head1.png'
import lit from './lit1.png'





import './Styles.scss';


const Content = (props) => {

    return (
        <>
                <h1 className="projects">Projects</h1>
            <div className="container">
                <a href="https://youtu.be/z7wommSAJ7c">
                <img className="container__stump" src={stumptown} alt="project-of-stumptown" />
                </a>
                <a href="https://youtu.be/Vl2AZpU1j3g">
                <img className="container__lit" src={lit} alt="project-of-lit-books"/>
                </a>
            </div>

        </>
    )
}

export default Content;