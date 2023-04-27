import React from 'react'

function Control(props) {
    const StartButton = (
        <div className='btn btn-one btn-start' onClick={props.handleStart}>
            Start
        </div>
    );
    const ActiveButton = (
        <div className='btn-grp'>
            <div className='btn btn-two' onClick={props.handleReset}>
                Reset
            </div>
            <div className='btn btn-one' onClick={props.handlePauseResume}>{props.isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    );
    return (
        <div className='button'>
            <div>{props.active ? ActiveButton : StartButton}</div>
        </div>
    )
}
export default Control;