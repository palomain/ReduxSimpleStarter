import React from 'react';
import ReactDOM from 'react-dom';

//Create component
const App = () => {
    return <div>Hi!</div>;
}

//Insert into page
ReactDOM.render(<App />, document.querySelector(".container"));