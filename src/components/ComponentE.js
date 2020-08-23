import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET } from '../actions/index';

const ComponentE = () => {
    const { globalState, setGlobalState } = useContext(Store);
    //1ずつ上げる
    const handleClick = () => {
        setGlobalState({
            type: INCREMENT
        });
    };
    //1ずつ下げる
    const downClick = () => {
        setGlobalState({
            type: DECREMENT
        });
    };
    //0に戻る
    const creaClick = () => {
        setGlobalState({
            type: RESET
        });
    };

    console.log(globalState)
    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={downClick}>-1</button>
            <button onClick={creaClick}>reset</button>
        </div>
    );
};

export default ComponentE
