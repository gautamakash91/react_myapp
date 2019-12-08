import React, { Component } from "react";

var a = 0;

export default class Fresh extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 10,
            b: 20,
            c: 30
        }
    }

    handleChange = () => {
        this.setState({
            a: this.state.b,
            c: this.state.a
        },function(){
            console.log(this.state.a+" - "+this.state.c);
        })
    }

    render() {
        return (
            <div>
                {this.state.a}
                <br />
                {this.state.c}
                <button onClick={this.handleChange}>
                    click me
                </button>
            </div>
        )
    }
}
