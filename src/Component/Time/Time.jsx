import React from 'react'

function Time(props) {
    return (
        <div className='time'>
            <span className='digit'>
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className='digit'>
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
            </span>
            <span className='digit mili'>
                {("0" + ((props.time / 10) % 100)).slice(-2)}
            </span>
        </div>
    );
}
export default Time;