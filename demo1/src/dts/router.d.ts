import { RouteObject } from "react-router-dom";

interface IDomMeta {
    descript?: string
    title?: string;
    loginAuth?: boolean
    auth?: string
}

declare module "react-router-dom" {
    export interface RouteObject {
        meta?: IDomMeta;
        children?: RouteObject[];
    }
}
