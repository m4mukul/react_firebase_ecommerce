import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const ScrollTop = () => {
    const {pathname} = useLocation();4
    useEffect(()=>{
        setTimeout(() =>{
            window.scrollTo(0, 0)
        },0)
    },[pathname])
  return (
    <div>ScrollTop</div>
  )
}

export default ScrollTop