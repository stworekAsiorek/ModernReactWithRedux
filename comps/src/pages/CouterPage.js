import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel"
import {produce} from "immer"

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const ADD_VALUE_TO_COUNT = "add-value-to-count";
const SET_VALUE_TO_ADD = "set-value-to-add";

const reducer = (state, action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            state.count = state.count +1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        default:
            return;
    }
}

function CounterPage({initialCount}){
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    })

    console.log(state);

    const increment = () => {
        dispatch({type: INCREMENT_COUNT});
    }

    const decrement = () => {
        dispatch({type: DECREMENT_COUNT});
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({type: SET_VALUE_TO_ADD, payload: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: ADD_VALUE_TO_COUNT});
    }

    return (
    <Panel>
        <h1> Count is {state.count} </h1>
        <div className="flex flex-row">
            <Button primary onClick={increment}> Increment </Button>
            <Button primary onClick={decrement}> Decrement </Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input value={state.valueToAdd || ""} onChange={handleChange} className="p-1 m-3 bg-gray-50 border border-gray-300" type="number"/>
            <Button>Add it!</Button>
        </form>
    </Panel>)
}

export default CounterPage