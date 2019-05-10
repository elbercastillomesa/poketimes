import React from 'react';


const Rainbow = (WrappedComponent) => {
    
    const colours = ['pink', 'blue', 'gray', 'green' , 'orange'];
    const randomColour = colours[Math.floor(Math.random() * 4)];
    const className = randomColour + '-text';

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props }/>
            </div>
        )
    }
}

export default Rainbow;