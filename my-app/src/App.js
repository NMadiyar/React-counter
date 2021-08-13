import React,{useState} from  'react';
import './index.scss';
import Button from "./components/Button";
import Counter from "./components/Counter";



function App() {
    const [count, setCount] = useState(0);
    const decrease = ()=> setCount(prevCount=>prevCount-1);
    const increase = ()=> setCount(prevCount=>prevCount+1);
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <img src="https://cdn.dribbble.com/users/1231052/screenshots/2817948/tinyfin.jpg?compress=1&resize=400x300" alt="murlock"/>
            <div className='btn-pos'>
                <Button  text="Уменьшить" callback={decrease} />
                <Counter props={count}/>
                <Button  text="Увеличить" callback={increase} />
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
