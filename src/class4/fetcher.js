import React from "react";
import { Link } from "react-router-dom";

export default class Fetcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col: "",
            users: []
        }
    }

    // componentDidMount(){
    //     fetch("http://www.colr.org/json/color/random").
    //     then( (res)=> res.json() ).
    //     then( (responseJson)=>{
    //         console.log(responseJson.colors[0].hex)
    //         this.setState({
    //             col: responseJson.colors[0].hex
    //         })
    //     })
    // }

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2", {

        }).
            then((res) => res.json()).
            then((responseJson) => {
                console.log(responseJson.data)
                this.setState({
                    users: responseJson.data
                })
            })
    }

    render() {
        return (
            <div style={{ backgroundColor: "#" + this.state.col }}>
                <Link to={{
                    pathname: "/newpath",
                    state: {
                        user_id: "abc123"
                    }
                }}>Go to New Path</Link>
                {this.state.col}
                {this.state.users.map((user) => (
                    <div>
                        <img
                            src={user.avatar}
                            style={{ width: 30, borderRadius: "50%" }}
                        />
                        {user.first_name}
                    </div>
                ))}

            </div>
        )
    }
}