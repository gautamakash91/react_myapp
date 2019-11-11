import React from "react";

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a: 0,
            b:0,
            sum:0
        }
    }
    handleInput1=(e)=>{
        this.setState({
            a: e.target.value
        })
    }

    handleInput2=(e)=>{
        this.setState({
            b: e.target.value
        })
    }

    sum =()=>{
        this.setState({
            sum: parseInt(this.state.a) + parseInt(this.state.b)
        })
    }
    render(){
        return(
            <div>
                <input onChange={this.handleInput1} />
                <input onChange={this.handleInput2} />
                <button onClick={this.sum}>
                    Add
                </button>
                {this.state.sum}
            </div>
        )
    }
}