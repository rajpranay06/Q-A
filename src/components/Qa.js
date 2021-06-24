import React from 'react'
import Navbar from './Navbar'
import '../css/Qa.css'
import Feed from './Feed'
function Qa() {
    return (
        <div className="qa">
            <Navbar />
            <div className="qa__content">
                <Feed />
            </div>      
        </div>

    )
}

export default Qa
