import React, { useMemo} from 'react';
import {useRoutes} from "react-router-dom";

import style from './App.module.scss'
import generateRouter, {getRoutes} from "../router/index";

const RouterWrapper = () => {
    console.log('execute generateRouter function')

    const routers = useMemo(() => generateRouter(getRoutes()), [])
    return useRoutes(routers)
}

const App: React.FC = () => {


    return (
        <div className={style.app}>
            <RouterWrapper/>
        </div>
    );
}

export default App;
