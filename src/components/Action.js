import React from 'react';

// stateless Action component
export const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions}
                    onClick={props.handlePick}>What should I do?</button>
        </div>
    );
}