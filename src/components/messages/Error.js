import React from 'react'

const Error = (props) => {
    return (
        <div className="errorMessage">
            {props.children}
        </div>
    )
}

export default Error;
