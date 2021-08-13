import React from 'react';



function Button({text,callback}) {

    return (
            <button className='btn increase' onClick={callback}>
                {text}
                </button>
       );
}


export default Button;