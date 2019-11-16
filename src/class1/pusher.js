import React from "react";
import MyProps from "../class2/myprops";

const a ="test";

export default class Pusher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: "",
            b: 0,
            arr: [],
            arr2: []
        }
    }

    handleName = (e) => {
        this.setState({
            a: e.target.value
        })
    }

    handleAge = (e) => {
        this.setState({
            b: e.target.value
        })
    }

    handleClick = () => {
        this.state.arr.push({ name: this.state.a, age: this.state.b });
        this.setState({
            arr: this.state.arr
        })
    }

    removeIndex = (s) => {
        var index = this.state.arr.indexOf(s);
        this.state.arr2.push(s);
        this.state.arr.splice(index, 1);
        this.setState({
            arr: this.state.arr,
            arr2: this.state.arr2
        })
    }

    transferLeft=(s)=>{
        var index = this.state.arr2.indexOf(s);
        this.state.arr2.splice(index,1);
        this.state.arr.push(s);
        this.setState({
            arr: this.state.arr,
            arr2: this.state.arr2
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleName} />
                <input onChange={this.handleAge} />

                <button onClick={this.handleClick}>
                    Push
                </button>

                <br />
                <div style={{ backgroundColor: "#f2f2f2", width:"50%", display:"inline-block" }}>
                {this.state.arr.map((s) => (
                    <div>
                        {s.name}
                        {s.age}
                        <button onClick={this.removeIndex.bind(this, s)}>
                            >
                        </button>
                    </div>
                ))}
                </div>

                <div style={{ backgroundColor: "#ff0000", width:"50%", display:"inline-block" }}>
                {this.state.arr2.map((s) => (
                    <div>
                        <button onClick={()=>{
                            this.transferLeft(s)
                        }}>
                            {"<"}
                        </button>
                        {s.name}
                        {s.age}
                    </div>
                ))}
                </div>
            </div>
        )
    }
}