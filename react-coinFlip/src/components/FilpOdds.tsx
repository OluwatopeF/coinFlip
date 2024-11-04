import { useState } from "react";

// an algotithm that chooses a random number for heads(odd) or tails(even)
function FlipOdds() {
    // creating a RNG (starts initially with  a random number on load from 1 t0 100
    const [numberGen, setnumberGen] = useState(0);
    
    const handleClick = () => setnumberGen(Math.floor(Math.random() * 100) + 1);
    
    // Result
        return (
            <>
                <p>Coin flip animation (in later update)</p>
                <button
                 onClick={handleClick}
                 >Flip Coin</button>

                {numberGen % 2 != 0 && <h1>You flipped Heads</h1>}
                {numberGen % 2 == 0 && <h1>You flipped Tails</h1>}
            </>
        );
}

export default FlipOdds;