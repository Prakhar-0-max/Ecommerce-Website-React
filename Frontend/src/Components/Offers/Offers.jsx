import React from "react"
import "./Offers.css"
import exclusive from "../../assets/exclu.webp"
const Offers =() =>{
    return(
        <div className="Offers">
            <div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>Only ON BEST SELLERS PRODUCTs</p>
<button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive} alt="" />

            </div>
        </div>
    )
}
export default Offers