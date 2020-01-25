import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return (
        <div>
            <Link to="/">Main page</Link>
            <Link to="/recommendations">Recommendations</Link>
            <Link to="/history">History</Link>
        </div>
    )
}

export default Navbar