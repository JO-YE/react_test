import React from "react";

const Hello = () => {
    return React.createElement('h1', {id: 'Hello'}, 'Hi Racheal, I am created with the createElemnet syntax')
}

export default Hello;

// this is what JSX is translated to at runtime...a regular javascript