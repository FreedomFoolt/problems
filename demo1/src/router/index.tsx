import React from "react";
import { RouteObject} from "react-router-dom";

import RouterBeforeEach from "./RouterBeforeEach";
import Source from "../views/admin/source/Source";
import Admin from "../views/admin/Admin";

export const adminContentSourceRouter: RouteObject = {
    path: 'source',
    meta: {
        title: '内容管理 | 资源'
    },
    element: <Source/>
}
export const getRoutes = (): RouteObject[] => {

    return ([
            {
                path: '/',
                element: <Admin/>,
                children: [
                    adminContentSourceRouter
                ]
            }
        ]
    )

}

export const generateComponentByRouter = (route: RouteObject) => {
    if (route.children) {
        route.children = generateRouter(route.children)
    }

    route.element = (
        <RouterBeforeEach {...route.meta}>
            {route.element}
        </RouterBeforeEach>
    )

    return route
}


const generateRouter = (routes: RouteObject[]) => {
    return routes.map(route => generateComponentByRouter(route))
};


export default generateRouter
