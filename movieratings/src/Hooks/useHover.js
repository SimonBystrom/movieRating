import {useState, useRef, useEffect} from "react"

/* 
Custom hook that adds an event listener to the currently hovered movie element (using ref)
 and then removes it when mouse leaves
*/

export default function useHover(){
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter(){
        setHovered(true)
    }

    function leave(){
        setHovered(false)
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
        
        return () => {    
            ref.current.removeEventListener("mouseenter", enter)
            ref.current.removeEventListener("mouseleave", leave)
        }
    }, [])

    return [hovered, ref]
}