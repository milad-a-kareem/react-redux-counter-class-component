import { useDispatch, useSelector } from 'react-redux'
import {Component} from 'react'

import './App.css';

function App() {
  const counter = useSelector(state=> state.counter)
  const isHidden = useSelector(state=> state.isHidden)
  const dispatch = useDispatch()

  const increseBy=()=>{
    dispatch({type:'increseby', amount:10})
  }
  const increment=()=>{
    dispatch({type:'inc'})
  }
  const decrement=()=>{
    dispatch({type:'dec'})
  }

  const toggle =()=>{
    dispatch({type:'toggleVisibility'})
  }


  return (
    <div className="App">
      <button onClick={toggle}>toggle visibility</button>
      {
        isHidden ? null : (<div>
          <h1>{counter}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={increseBy}>increse by 10</button>
          <button onClick={decrement}>decrement</button>
  
        </div>)
      }
      
    </div>
  );

}


export default App;
