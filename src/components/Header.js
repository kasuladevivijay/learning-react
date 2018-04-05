import React from 'react';

// stateless Header component
export const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
};