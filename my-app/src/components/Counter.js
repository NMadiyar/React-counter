import React from 'react';

function colors() {
    let colorArray = [];

    for(let i =0; i < 3 ; i++){
        colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
    }
    // rgb -> hex
    let color = colorArray
        .map( x => x.toString(16))
        .join('');

    console.log(`background-color: #${color}`);
    return `#${color}`;
}

function Counter({props}) {
    return (
    <div className='counter' style={{backgroundColor: colors()}}>
        {props}
    </div>
    )
}
export default Counter;