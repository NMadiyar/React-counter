import {useState} from 'react';

// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = colors();
// });

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




function Button() {
  const [count,setCount] = useState(0);

    return (
        <div className='container'>
            <img src="https://cdn.dribbble.com/users/1231052/screenshots/2817948/tinyfin.jpg?compress=1&resize=400x300" alt="murlock"/>

            <div className='btn-pos'>
            <button className='btn increase' onClick={() => setCount(count + 1)}>
                 Увеличить
                </button>
                <div className='counter' style={{backgroundColor: colors()}}>
                   {count}
                </div>
            <button className='btn decrease' onClick={() => setCount(count -1)}>
                   Уменьшить
                </button>
            </div>
        </div>
       );
}

export default Button;