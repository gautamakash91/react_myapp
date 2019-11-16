import React from "react";

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: 2,
            c: 3
        }
    }

    componentDidMount() {
        this.setState({
            a: this.state.b,
            c: this.state.a
        }, function () {
            console.log(`${this.state.a} - ${this.state.c}`);
        })
    }

    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}