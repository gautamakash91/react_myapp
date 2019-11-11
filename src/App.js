import React from "react";

var a = "React is awesome!!";

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      b: "this is a string",
      c:20,
      d: 1.5
    }
  }

  handleClick=()=>{
    this.setState({
      b: "this is a small string",
      c:10,
      d:2.5,
      arr:[]
    })
  }

  handleInput=(event)=>{
    this.setState({
      b: event.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>Hello World</h1>
        {a}
        {this.state.b}
        {this.state.c}
        {this.state.d}

        <input onChange={this.handleInput} />
        <button onClick={this.handleClick} >
          Click Me
        </button>
      </div> 
    )
  }
}