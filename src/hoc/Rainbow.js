import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'green', 'black', 'blue', 'yellow', 'orange', 'brown', 'grey'];
    const rainbowColor = colors[Math.floor(Math.random() * 9)];
    const className = rainbowColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow