import React from "react";

export default class Fresh extends React.Component {
 
    render() {
        // console.log(this.props.location.state.user_id)
        return (
            <div>
                My Second Component
                {/* {this.props.location.state.user_id} */}
                {this.props.val}
            </div>
        )
    }
}