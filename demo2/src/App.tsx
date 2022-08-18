import React from 'react';
import { useRoutes} from "react-router-dom";
import router from "./router";

const App = () => {

    console.log('App component render')

    return (
        <div className="App">
            {useRoutes(router)}
        </div>
    );
}

export default App;
