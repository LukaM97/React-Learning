import React from 'react';

const header = () => {
    const headerStyle = {
        width: '100%',
        padding: '1%',
        backgroundColor: '#0099ff',
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>Exercise</h1>
        </div>
    );
};

export default header;