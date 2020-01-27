import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return (
        <div class="Navbar">
            <Link to="/"><i class="ri-home-4-line"></i></Link>
            <Link to="/"><img src="https://fontmeme.com/permalink/200127/8f102e93957aabf7a387f12495c511d9.png"></img></Link>
            <Link to="/recommendations"><i class="ri-star-line"></i></Link>
            <Link to="/history"><i class="ri-book-3-line"></i></Link>
        </div>
    )
}

export default Navbar

/* fix main title to something better looking (higher res) */