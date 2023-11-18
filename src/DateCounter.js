import { useReducer, useState } from "react";

function reducer(state, action) {
    // if(action.type === 'increase'){
    //     return state + 1;
    // }
    // console.log(state)
    // if (action.type === 'inc' || action.type === 'dec') {
    //     return { count: state.count + (action.payload), step: state.step }
    // }

    // if (action.type === 'setcount') {
    //     return { count: (action.payload), step: state.step }
    // }

    // return { count: 0, step: 1 };

    switch (action.type) {
        case 'dec':
            return { ...state, count: state.count - state.step };

        case 'inc':
            return { ...state, count: state.count + state.step };

        case 'setcount':
            return { ...state, count: action.payload };

        case 'setstep':
            return { ...state, step: action.payload };

        case 'reset':
            return { count: 0, step: 1 };

        default:
            throw new Error('Unknown Action');
    }

}

function DateCounter() {

    const initialState = { count: 0, step: 1 };
    const [state, dispatch] = useReducer(reducer, initialState);

    const { count, step } = state;

    // This mutates the date object.
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    const dec = function () {
        dispatch({
            type: 'dec',
            payload: -1
        });
    };

    const inc = function () {
        dispatch({
            type: 'inc',
            payload: 1
        });
    };

    const defineCount = function (e) {
        dispatch({
            type: 'setcount',
            payload: Number(e.target.value)
        })
    };

    const defineStep = function (e) {
        dispatch({
            type: 'setstep',
            payload: Number(e.target.value)
        })
    };

    const reset = function () {
        dispatch({
            type: 'reset'
        })
    };

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default DateCounter;