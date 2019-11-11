import React from "react";

export default class MyProps extends React.Component{
    
    
    render(){

        return(
            <div>
                Hello World!!
                {this.props.x.map( (s)=>(
                    <button onClick={()=>{this.props.func(s)}}>
                        {s.name}
                        {s.age}
                    </button>
                ) )}
            </div>
        )
    }
}