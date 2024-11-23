import { useState, useEffect } from "react";
import FlipOdds from "./FilpOdds";
import '../App.css';

function coin(){

    // after button is clicked an animation is played and shows the coin
    //there should be a delay for the process until the animation ends


    return(
        <>
            <div className="coin">
                <div className="heads">
                    <h1>HEADS</h1>
                </div>

                <div className="tails">
                    <h1>TAILS</h1>
                </div>
            </div>
        </>
    )
}

export default coin;