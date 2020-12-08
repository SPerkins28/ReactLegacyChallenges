import React from 'react'

export default (props) => {
    return (
        <div 
        style={{textDecoration: props.task.complete ? 'line-through' : ''}}
        onClick={props.toggleComplete}
        >
            {props.task.text}
        </div>
    )
}
