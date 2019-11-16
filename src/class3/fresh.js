import React from "react";

var a = "this is a string";

export default class Fresh extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: ""
        }
    }

    handleChange = (e) => {
        if (e.target.value.substring(0,1)!="#") {
            this.setState({
                a: "#"+e.target.value
            })
        }else{
            this.setState({
                a: e.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} />
                <div
                    style={{
                        height: 200,
                        width: 200,
                        backgroundColor: this.state.a
                    }}>

                </div>
                
            </div>
        )
    }
}