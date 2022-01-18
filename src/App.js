import {  connect } from 'react-redux'
import {Component} from 'react'

import './App.css';

class App extends Component {

  increseBy=()=>{
    this.props.incby()
  }
  increment=()=>{
    this.props.inc()
  }
  decrement=()=>{
    this.props.dec()
  }

  toggle =()=>{
    this.props.toggle()
  }


  render(){
    return (
      <div className="App">
        <button onClick={this.toggle.bind(this)}>toggle visibility</button>
        {
          this.props.isHidden ? null : (<div>
            <h1>{this.props.counter}</h1>
            <button onClick={this.increment.bind(this)}>increment</button>
            <button onClick={this.increseBy.bind(this)}>increse by 10</button>
            <button onClick={this.decrement.bind(this)}>decrement</button>
    
          </div>)
        }
        
      </div>
    );

  }
}

const mapStateToProps = (state)=>{
  return {
    counter: state.counter,
    isHidden : state.isHidden
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    incby: ()=>{dispatch({type:'increseby', amount:10})},
    inc: ()=>{dispatch({type:'inc'})},
    dec: ()=>{dispatch({type:'dec'})},
    toggle: ()=>{dispatch({type:'toggleVisibility'})},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
