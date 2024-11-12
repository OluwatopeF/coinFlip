import { useState } from "react";

// an algotithm that chooses a random number for heads(odd) or tails(even)
function FlipOdds() {
    // creating a RNG (starts initially with  a random number on load from 1 t0 100
    const [numberGen, setnumberGen] = useState(0);

    //Counters for heads/tails
    const [headCounter, setHeadCounter] = useState(0);
    const [tailCounter, setTailCounter] = useState(0);
    
    const handleClick = () => {
        setnumberGen(Math.floor(Math.random() * 100) + 1);
        
        if(numberGen % 2 === 0 ){
            setHeadCounter((prev) => prev +1);
        } else{
            setTailCounter((prev) => prev +1);
        }
        
    }
    

    // Result
        return (
            <>
                <div className="coin-stat">
                <button onClick={handleClick}>Flip Coin</button> <br></br>
                
                {/* result from numberGen needs to stay invisible during flip animation*/}
                {numberGen % 2 != 0 && <h1>You flipped Heads </h1>}
                {numberGen % 2 == 0 && <h1>You flipped Tails</h1>}

                { <h1>Heads: {headCounter} Time(s)</h1>}
                {<h1>Tails: {tailCounter} Time(s)</h1>}
                </div>
            </>
        );
}

export default FlipOdds;