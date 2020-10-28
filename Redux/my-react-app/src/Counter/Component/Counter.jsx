import React from "react";
import { store } from "../Redux/Store";
import { increment, decrement } from "../Redux/Action";

class Counter extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        console.log(store.getState().count)
        return (
            <div>
                <h1>counter</h1>
                <h2>{store.getState().count}</h2>
                <button onClick={() => store.dispatch(increment(1))}>Increase</button>
                <button onClick={() => store.dispatch(decrement(1))}>Decrease</button>
            </div>
        );
    }
}

export default Counter;
