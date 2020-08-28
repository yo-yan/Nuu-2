import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET, EVENT } from '../actions/index';

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
    const crearClick = () => {
        setGlobalState({
            type: RESET
        });
    };
    //３の倍数時＋10
    const eventClick = () => {
        setGlobalState({
            type: EVENT
        });
    };

    console.log(globalState)
    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={downClick}>-1</button>
            <button onClick={crearClick}>reset</button>
            <button onClick={eventClick}>+10</button>
        </div>

    );
};

export default ComponentE
