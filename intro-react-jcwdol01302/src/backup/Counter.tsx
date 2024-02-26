import React from "react";

export default class Counter extends React.Component{
    state = {
        counter: 0,
    }
    componentDidMount(): void {
        
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        
    }
    render(){
        return(<div>
            <div>{this.state.counter}</div>
            <button onClick={() => this.setState(this.state.counter + 1)}>
            {" "}
            Add{" "}
            </button>
            </div>)
    }
}