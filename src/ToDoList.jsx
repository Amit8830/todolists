import React from 'react'

const TODoList = (props) => {


    return (<div className='todo-style'>
        <i className="fa fa-times" aria-hidden="true" 
            onClick={()=>{
                props.onSelect(props.id)
            }}
        > x </i>
        <li> {props.text}</li>
    </div>
    );
};

export default TODoList;