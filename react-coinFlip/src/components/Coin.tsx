import { useState, useEffect } from "react";
import FlipOdds from "./FilpOdds";
import '../App.css';

function coin(){

    // after button is clicked an animation is played and shows the coin
    //there should be a delay for the process until the animation ends


    return(
        <>
        <div className="coin">
            <div className="coinHT">
                <h1>Heads</h1>
            </div>
            <div className="coinHT">
                <h1>Tails</h1>
            </div>


        </div>

        </>
    )
}

export default coin;